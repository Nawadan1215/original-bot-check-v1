# original-bot-check-v1

MyCaptcha
オリジナルreCAPTCHA風の検証ウィジェット！ボタンを押すとランダムな6文字を入力するモーダルが表示され、成功するとボタンが無効化されます！
デモ
GitHub Pagesでデモを見る
インストール

以下のスクリプトをHTMLに追加:<script src="https://cdn.jsdelivr.net/gh/username/my-captcha/client/mycaptcha.js"></script>


HTMLに以下を追加:<form>
  <div id="mycaptcha"></div>
  <button type="submit">送信</button>
</form>
<script>
  MyCaptcha.render('mycaptcha');
</script>



使い方

<div id="mycaptcha"></div>をフォーム内に配置。
MyCaptcha.render('mycaptcha')を呼び出してウィジェットをレンダリング。
ユーザーがボタンをクリックすると、モーダルでランダムな6文字を入力。
正しく入力すると「成功！」メッセージが表示され、ボタンが無効化。
フォーム送信時にmycaptcha-tokenが自動で追加（将来のAPI化対応）。

ライセンス
MIT
