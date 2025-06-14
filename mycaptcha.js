window.MyCaptcha = {
  
  render: function(elementId, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('MyCaptcha: Element not found');
      return;
    }
    
    element.innerHTML = `
      <button id="captcha-button-${elementId}" class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed">
        私はロボットではありません
      </button>
      <p id="status-message-${elementId}" class="mt-4 text-lg font-semibold"></p>
      <div id="modal-overlay-${elementId}" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 10;"></div>
      <div id="modal-content-${elementId}" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 20;" class="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 class="text-xl font-bold mb-4">検証</h2>
        <p class="mb-2">以下の文字を入力してください:</p>
        <p id="random-text-${elementId}" class="font-mono text-lg bg-gray-200 p-2 rounded"></p>
        <input id="user-input-${elementId}" type="text" class="w-full mt-2 p-2 border rounded" placeholder="文字を入力" maxlength="6">
        <p id="error-message-${elementId}" class="text-red-500 text-sm mt-1"></p>
        <div class="mt-4 flex justify-end space-x-2">
          <button onclick="MyCaptcha.closeModal('${elementId}')" class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">閉じる</button>
          <button onclick="MyCaptcha.verifyInput('${elementId}')" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">検証</button>
        </div>
      </div>
    `;
    
    const button = document.getElementById(`captcha-button-${elementId}`);
    if (button && !button._eventAttached) {
      button.addEventListener('click', () => MyCaptcha.showModal(elementId));
      button._eventAttached = true; 
    }
    
    const input = document.getElementById(`user-input-${elementId}`);
    if (input && !input._eventAttached) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          MyCaptcha.verifyInput(elementId);
        }
      });
      input._eventAttached = true;
    }
  },

  generateRandomText: function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  showModal: function(elementId) {
    document.getElementById(`modal-overlay-${elementId}`).style.display = 'block';
    document.getElementById(`modal-content-${elementId}`).style.display = 'block';
    const randomText = this.generateRandomText();
    document.getElementById(`random-text-${elementId}`).textContent = randomText;
    document.getElementById(`user-input-${elementId}`).value = '';
    document.getElementById(`error-message-${elementId}`).textContent = '';
    document.getElementById(`user-input-${elementId}`).focus();
  },

  closeModal: function(elementId) {
    document.getElementById(`modal-overlay-${elementId}`).style.display = 'none';
    document.getElementById(`modal-content-${elementId}`).style.display = 'none';
  },

  verifyInput: function(elementId) {
    const userInput = document.getElementById(`user-input-${elementId}`).value.trim();
    const randomText = document.getElementById(`random-text-${elementId}`).textContent;
    if (userInput === randomText) {
     
      document.getElementById(`status-message-${elementId}`).textContent = '成功！検証が完了しました！';
      document.getElementById(`status-message-${elementId}`).classList.add('text-green-500');
      document.getElementById(`captcha-button-${elementId}`).disabled = true;
      this.closeModal(elementId);
      
      const event = new Event('mycaptchaSuccess');
      document.getElementById(elementId).dispatchEvent(event);
    } else {
      
      document.getElementById(`error-message-${elementId}`).textContent = '入力が間違っています。もう一度お試しください。';
      document.getElementById(`user-input-${elementId}`).value = '';
    }
  }
};
