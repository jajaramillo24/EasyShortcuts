

let customLinks = {
  link1: { url: 'https://www.google.com', text: 'Link 1' },
  link2: { url: 'https://www.github.com', text: 'Link 2' }
};

const serviceIcons = {
  custom1: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  custom2: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`,
  google: `<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="#000000"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
};

const menuItems = [
  { id: 'custom1', angle: 0, getUrl: () => customLinks.link1.url, getText: () => customLinks.link1.text },
  { id: 'custom2', angle: 45, getUrl: () => customLinks.link2.url, getText: () => customLinks.link2.text },
  { id: 'google', angle: 90, url: 'https://www.google.com/', text: 'Google' },
  { id: 'facebook', angle: 135, url: 'https://www.facebook.com/', text: 'Facebook' },
  { id: 'twitter', angle: 180, url: 'https://www.twitter.com/', text: 'Twitter' },
  { id: 'linkedin', angle: 225, url: 'https://www.linkedin.com/', text: 'LinkedIn' },
  { id: 'github', angle: 270, url: 'https://www.github.com/', text: 'GitHub' },
  { id: 'youtube', angle: 315, url: 'https://www.youtube.com/', text: 'YouTube' }
];

function createMenuItemHTML(item) {
  const url = item.getUrl ? item.getUrl() : item.url;
  const text = item.getText ? item.getText() : item.text;
  const icon = serviceIcons[item.id] || serviceIcons.custom1;

  return `
    <div class="content__page" 
         style="--angle: ${item.angle};" 
         data-service="${item.id}"
         data-tooltip="${text}">
      <a href="${url}" target="_blank" rel="noopener noreferrer">
        <span class="icon">${icon}</span>
        <span class="label">${text}</span>
      </a>
    </div>
  `;
}

function createRadialMenu() {
  const existingMenu = document.getElementById('radialMenu');
  const existingOverlay = document.getElementById('radialMenuOverlay');
  if (existingMenu) existingMenu.remove();
  if (existingOverlay) existingOverlay.remove();
  const overlay = document.createElement('div');
  overlay.className = 'radial-menu-overlay';
  overlay.id = 'radialMenuOverlay';
  document.body.appendChild(overlay);

  const menuHTML = `
    <div class="circular-menu" id="radialMenu">
      <div class="circular-menu__content">
        ${menuItems.map(item => createMenuItemHTML(item)).join('')}
      </div>
      <div class="circular-menu__menu-button" id="menuCenterButton">
        <span class="center-icon">+</span>
      </div>
    </div>
  `;

  const menuContainer = document.createElement('div');
  menuContainer.innerHTML = menuHTML;
  document.body.appendChild(menuContainer.firstElementChild);

  const menu = document.getElementById('radialMenu');
  const menuButton = document.getElementById('menuCenterButton');
  const menuContent = menu.querySelector('.circular-menu__content');

  menuButton.addEventListener('mouseenter', () => {
    menuContent.classList.add('visible');
  });
  menu.addEventListener('mouseleave', () => {
    menuContent.classList.remove('visible');
  });

  overlay.addEventListener('click', () => {
    closeMenu();
  });
  document.addEventListener('keydown', handleEscape);

  return menu;
}

function handleEscape(e) {
  if (e.key === 'Escape' && radialMenu && radialMenu.classList.contains('open')) {
    closeMenu();
  }
}

function openMenu(x, y) {
  if (!radialMenu) {
    radialMenu = createRadialMenu();
  }

  const overlay = document.getElementById('radialMenuOverlay');
  const menuContent = radialMenu.querySelector('.circular-menu__content');

  const menuSize = 280;
  const padding = 20;

  let adjustedX = x;
  let adjustedY = y;

  if (x + menuSize / 2 > window.innerWidth - padding) {
    adjustedX = window.innerWidth - menuSize / 2 - padding;
  }
  if (x - menuSize / 2 < padding) {
    adjustedX = menuSize / 2 + padding;
  }
  if (y + menuSize / 2 > window.innerHeight - padding) {
    adjustedY = window.innerHeight - menuSize / 2 - padding;
  }
  if (y - menuSize / 2 < padding) {
    adjustedY = menuSize / 2 + padding;
  }

  radialMenu.style.left = `${adjustedX - menuSize / 2}px`;
  radialMenu.style.top = `${adjustedY - menuSize / 2}px`;

  radialMenu.classList.add('open');
  if (overlay) overlay.classList.add('visible');

  setTimeout(() => {
    if (menuContent) menuContent.classList.add('visible');
  }, 100);
}

function closeMenu() {
  if (radialMenu) {
    const overlay = document.getElementById('radialMenuOverlay');
    const menuContent = radialMenu.querySelector('.circular-menu__content');

    if (menuContent) menuContent.classList.remove('visible');
    radialMenu.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
  }
}

function updateMenuItems() {
  if (radialMenu) {
    const content = radialMenu.querySelector('.circular-menu__content');
    if (content) {
      content.innerHTML = menuItems.map(item => createMenuItemHTML(item)).join('');
    }
  }
}

let radialMenu = null;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "ping") {
    sendResponse({ pong: true });
    return true;
  }

  if (message.action === "getMousePosition") {
    sendResponse({ x: mouseX, y: mouseY });
    return true;
  }

  if (message.action === "toggleRadialMenu") {
    if (!radialMenu) {
      radialMenu = createRadialMenu();
    }

    if (radialMenu.classList.contains('open')) {
      closeMenu();
    } else {
      const posX = message.position?.x || mouseX;
      const posY = message.position?.y || mouseY;
      openMenu(posX, posY);
    }
    sendResponse({ success: true });
    return true;
  }

  if (message.action === "updateCustomLinks") {
    customLinks = {
      link1: message.customLinks?.customLink1 || customLinks.link1,
      link2: message.customLinks?.customLink2 || customLinks.link2
    };
    updateMenuItems();
    sendResponse({ success: true });
    return true;
  }
});

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.addEventListener('scroll', () => {
  if (radialMenu && radialMenu.classList.contains('open')) {
    closeMenu();
  }
});

try {
  chrome.runtime.sendMessage({ action: "getCustomLinks" });
} catch (e) {
}