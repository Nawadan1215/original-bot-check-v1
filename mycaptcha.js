window.MyCaptcha = {
  // ウィジェットをレンダリング
  render: function(elementId, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('MyCaptcha: Element not found');
      return;
    }
    // ボタンを追加
    element.innerHTML = `
      <button id="captcha-button-${elementId}" class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed">
        私はロボットではありません
      </button>
      <p id="status-message-${elementId}" class="mt-4 text-lg font-semibold"></p>
      <!-- モーダルオーバーレイ -->
      <div id="modal-overlay-${elementId}" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 10;"></div>
      <!-- モーダルコンテンツ -->
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
    // ボタンにイベントリスナーを追加
    document.getElementById(`captcha-button-${elementId}`).addEventListener('click', () => MyCaptcha.showModal(elementId));
    // Enterキーで検証
    document.getElementById(`user-input-${elementId}`).addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        MyCaptcha.verifyInput(elementId);
      }
    });
  },

  // ランダムな6文字を生成
  generateRandomText: function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  // モーダルを表示
  showModal: function(elementId) {
    const randomText = MyCaptcha.generateRandomText();
    document.getElementById(`random-text-${elementId}`).textContent = randomText;
    document.getElementById(`user-input-${elementId}`).value = '';
    document.getElementById(`error-message-${elementId}`).textContent = '';
    document.getElementById(`modal-overlay-${elementId}`).style.display = 'block';
    document.getElementById(`modal-content-${elementId}`).style.display = 'block';
    document.getElementById(`user-input-${elementId}`).focus();
  },

  // モーダルを閉じる
  closeModal: function(elementId) {
    document.getElementById(`modal-overlay-${elementId}`).style.display = 'none';
    document.getElementById(`modal-content-${elementId}`).style.display = 'none';
  },

  // 入力検証
  verifyInput: function(elementId) {
    const userInput = document.getElementById(`user-input-${elementId}`).value.trim();
    const randomText = document.getElementById(`random-text-${elementId}`).textContent;
    if (userInput === randomText) {
      // 成功
      document.getElementById(`status-message-${elementId}`).textContent = '成功！検証が完了しました！';
      document.getElementById(`status-message-${elementId}`).classList.add('text-green-500');
      document.getElementById(`captcha-button-${elementId}`).disabled = true;
      MyCaptcha.closeModal(elementId);
      // フォームにトークンを追加（将来のAPI化用）
      const form = document.getElementById(`captcha-button-${elementId}`).closest('form');
      if (form) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'mycaptcha-token';
        input.value = 'verified-' + randomText;
        form.appendChild(input);
      }
    } else {
      // エラー
      document.getElementById(`error-message-${elementId}`).textContent = '入力が間違っています。もう一度お試しください。';
      document.getElementById(`user-input-${elementId}`).value = '';
    }
  }
};
