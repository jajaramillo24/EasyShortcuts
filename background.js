// ========================================
// RADIAL MENU - BACKGROUND SERVICE WORKER
// ========================================

// Inyectar content script si no está presente
async function ensureContentScriptLoaded(tabId) {
  try {
    // Intentar enviar un mensaje de ping
    const response = await chrome.tabs.sendMessage(tabId, { action: "ping" });
    return response && response.pong;
  } catch (e) {
    // Content script no está cargado, inyectarlo
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['contentScript.js']
      });
      await chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ['styles.css']
      });
      return true;
    } catch (injectError) {
      console.warn('Cannot inject script:', injectError.message);
      return false;
    }
  }
}

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-menu") {
    try {
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

      if (!activeTab || !activeTab.id) {
        console.warn('No active tab found');
        return;
      }

      // No ejecutar en páginas especiales
      const url = activeTab.url || '';
      if (url.startsWith('chrome://') ||
        url.startsWith('chrome-extension://') ||
        url.startsWith('about:') ||
        url.startsWith('file://') ||
        url === '') {
        console.warn('Cannot run on this page:', url);
        return;
      }

      // Asegurar que el content script esté cargado
      const isLoaded = await ensureContentScriptLoaded(activeTab.id);
      if (!isLoaded) {
        console.warn('Could not load content script');
        return;
      }

      // Pequeño delay para asegurar que el script esté listo
      await new Promise(resolve => setTimeout(resolve, 100));

      // Obtener posición del mouse
      let position = { x: 500, y: 300 }; // Fallback al centro

      try {
        const response = await chrome.tabs.sendMessage(activeTab.id, { action: "getMousePosition" });
        if (response && typeof response.x === 'number' && typeof response.y === 'number') {
          position = { x: response.x, y: response.y };
        }
      } catch (e) {
        console.log('Using fallback position');
      }

      // Mostrar el menú
      await chrome.tabs.sendMessage(activeTab.id, {
        action: "toggleRadialMenu",
        position: position
      });

    } catch (error) {
      console.error('Error toggling menu:', error);
    }
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateCustomLinks") {
    chrome.storage.sync.set(message.customLinks, () => {
      // Notificar a todas las tabs
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          if (tab.id && tab.url && !tab.url.startsWith('chrome://')) {
            chrome.tabs.sendMessage(tab.id, {
              action: "updateCustomLinks",
              customLinks: message.customLinks
            }).catch(() => { }); // Ignorar errores
          }
        });
      });
      sendResponse({ success: true });
    });
    return true;
  }

  if (message.action === "getCustomLinks") {
    chrome.storage.sync.get(['customLink1', 'customLink2'], (result) => {
      const customLinks = {
        customLink1: result.customLink1 || { url: 'https://www.google.com', text: 'Link 1' },
        customLink2: result.customLink2 || { url: 'https://www.github.com', text: 'Link 2' }
      };
      if (sender.tab && sender.tab.id) {
        chrome.tabs.sendMessage(sender.tab.id, {
          action: "updateCustomLinks",
          customLinks: customLinks
        }).catch(() => { });
      }
      sendResponse(customLinks);
    });
    return true;
  }
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('Radial Menu Extension installed');
});