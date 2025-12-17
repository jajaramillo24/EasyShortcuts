

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('customLinksForm');
  const link1Url = document.getElementById('link1Url');
  const link1Text = document.getElementById('link1Text');
  const link2Url = document.getElementById('link2Url');
  const link2Text = document.getElementById('link2Text');
  const saveButton = document.getElementById('saveButton');
  const toast = document.getElementById('toast');

  chrome.storage.sync.get(['customLink1', 'customLink2'], (result) => {
    if (result.customLink1) {
      link1Url.value = result.customLink1.url || '';
      link1Text.value = result.customLink1.text || '';
    }
    if (result.customLink2) {
      link2Url.value = result.customLink2.url || '';
      link2Text.value = result.customLink2.text || '';
    }
  });

  const inputs = [link1Url, link1Text, link2Url, link2Text];
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.validity.valid && input.value.trim()) {
        input.style.borderColor = 'rgba(16, 185, 129, 0.5)';
      } else if (input.value.trim()) {
        input.style.borderColor = 'rgba(239, 68, 68, 0.5)';
      } else {
        input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      }
    });
  });

  function showToast() {
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 2500);
  }

  function animateSaveButton() {
    const originalContent = saveButton.innerHTML;
    saveButton.classList.add('success');
    saveButton.innerHTML = 'Saved!';

    setTimeout(() => {
      saveButton.classList.remove('success');
      saveButton.innerHTML = originalContent;
    }, 2000);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const allValid = inputs.every(input => input.validity.valid && input.value.trim());

    if (!allValid) {
      inputs.forEach(input => {
        if (!input.validity.valid || !input.value.trim()) {
          input.style.borderColor = 'rgba(239, 68, 68, 0.5)';
          input.style.animation = 'shake 0.5s ease';
          setTimeout(() => {
            input.style.animation = '';
          }, 500);
        }
      });
      return;
    }

    const newCustomLinks = {
      customLink1: {
        url: link1Url.value.trim(),
        text: link1Text.value.trim()
      },
      customLink2: {
        url: link2Url.value.trim(),
        text: link2Text.value.trim()
      }
    };

    chrome.runtime.sendMessage({
      action: "updateCustomLinks",
      customLinks: newCustomLinks
    }, () => {
      animateSaveButton();
      showToast();

      setTimeout(() => {
        window.close();
      }, 1500);
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
      20%, 40%, 60%, 80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);
});