MyCaptcha
オリジナルreCAPTCHA風の検証ウィジェット！ボタンを押すと、ランダムな6文字を入力するモーダルが表示され、正しく入力すると「成功！」メッセージが出てボタンが無効化されます。シンプルで軽量、誰でも簡単に統合できます！
デモ
GitHub Pagesでデモを試す！
特徴

簡単統合: 数行のHTMLとJavaScriptで設置完了！
軽量: クライアントサイドのみで動く、サーバー不要の設計。
独立動作: 送信ボタン不要、検証成功でカスタムイベントを発火。
オープンソース: MITライセンスで自由に利用・改変OK！

インストール
1. スクリプトをHTMLに追加
以下の<script>タグを<head>または<body>に貼り付けます。
`<script src="https://cdn.jsdelivr.net/gh/username/my-captcha@latest/client/mycaptcha.js"></script>`

注: Tailwind CSSを使用しているので、デザインを維持したい場合は追加。
`<script src="https://cdn.tailwindcss.com"></script>`

2. HTMLにMyCaptchaを埋め込む
`<div id="mycaptcha"></div>`を追加し、MyCaptcha.renderを呼び出します。
```
<div id="mycaptcha"></div>
<script>
  MyCaptcha.render('mycaptcha');
</script>
```
使い方

設置: 上記のコードをHTMLにコピペ。
動作:
ユーザーが「私はロボットではありません」ボタンをクリック。
モーダルが表示され、ランダムな6文字を入力。
「検証」ボタン（またはEnterキー）でチェック。
正しい場合: 「成功！」メッセージが表示され、ボタンが無効化。mycaptchaSuccessイベントが発火。
間違った場合: エラーメッセージで再試行。


カスタム処理: 成功時にmycaptchaSuccessイベントをキャッチして、次のアクションを設定。

コード例（フル）
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MyCaptcha デモ</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/gh/username/my-captcha@latest/client/mycaptcha.js"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
  <div class="text-center">
    <h1 class="text-3xl font-bold mb-4">MyCaptcha デモ</h1>
    <div id="mycaptcha"></div>
  </div>
  <script>
    MyCaptcha.render('mycaptcha');
    document.getElementById('mycaptcha').addEventListener('mycaptchaSuccess', () => {
      console.log('検証成功！ここで次の処理を追加！');
    });
  </script>
</body>
</html>
```
カスタマイズ

ID変更: `<div id="mycaptcha">`を任意のIDに変更（例: `MyCaptcha.render('custom-id')`）。
スタイル: Tailwind CSSでカスタマイズ、または独自CSSを適用。
イベント処理: mycaptchaSuccessで任意のロジックを実装。

バグ修正履歴

2025-06-14: ボタン押下でモーダルが消えるバグを修正。イベント競合を解消。

将来の予定

サーバー検証: トークン検証APIの追加。
多言語対応: 英語や他の言語サポート。

開発者向け

リポジトリ: github.com/Nawadan1215/original-bot-check-v1
バグ報告: Issues
コントリビュート: プルリクエスト歓迎！

ライセンス
MITライセンスのもと、自由に利用・配布可能です。
クレジット
made by nawa
