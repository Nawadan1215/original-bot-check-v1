MyCaptcha
オリジナルreCAPTCHA風の検証ウィジェット！ボタンを押すと、ランダムな6文字を入力するモーダルが表示され、正しく入力すると「成功！」メッセージが出てボタンが無効化されます。シンプルで軽量、誰でも簡単にウェブサイトに統合できます！
デモ
GitHub Pagesでデモを試す！
特徴

簡単統合: 数行のHTMLとJavaScriptで設置完了！
軽量: クライアントサイドのみで動く、サーバー不要のシンプル設計。
カスタマイズ可能: フォームにトークンを自動追加（将来のAPI化対応済み）。
オープンソース: MITライセンスで自由に利用・改変OK！

インストール
以下の手順で、MyCaptchaをあなたのウェブサイトに追加できます！
1. スクリプトをHTMLに追加
以下の<script>タグを<head>または<body>に貼り付けます。CDN（jsDelivr）経由で提供しています。
`<script src="https://cdn.jsdelivr.net/gh/username/my-captcha@latest/client/mycaptcha.js"></script>`

注: Tailwind CSSを使用しているので、必要に応じて以下も追加してください（オプション）。
`<script src="https://cdn.tailwindcss.com"></script>`

2. HTMLにMyCaptchaを埋め込む
フォーム内に
```
<div id="mycaptcha"></div>を追加し、JavaScriptでMyCaptcha.renderを呼び出します。
<form action="/submit" method="POST">
  <div id="mycaptcha"></div>
  <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">送信</button>
</form>
<script>
  MyCaptcha.render('mycaptcha');
</script>
```
使い方

設置: 上記のコードをHTMLにコピペ。
動作:
ユーザーが「私はロボットではありません」ボタンをクリック。
モーダルが表示され、ランダムな6文字（英数字）が表示。
ユーザーが文字を入力し、「検証」ボタン（またはEnterキー）を押す。
正しい場合: 「成功！」メッセージが表示され、ボタンが無効化。フォームにmycaptcha-tokenが自動追加。
間違った場合: エラーメッセージが表示され、再試行可能。


フォーム送信: 成功時にmycaptcha-tokenがフォームに追加されるので、サーバーサイドで検証可能（将来のAPI化対応）。

コード例（フル）
以下の完全な例をコピペすれば、すぐに動きます！
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
    <form action="/submit" method="POST">
      <div id="mycaptcha"></div>
      <button type="submit" class="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg">送信</button>
    </form>
  </div>
  <script>
    MyCaptcha.render('mycaptcha');
  </script>
</body>
</html>
```
カスタマイズ

ID変更:``` <div id="mycaptcha">```のIDを任意のものに変更可能（例: ```MyCaptcha.render('custom-id')```）。
スタイル: Tailwind CSSをカスタマイズ、または独自のCSSでボタンやモーダルを装飾。
トークン: フォームに追加されるmycaptcha-tokenをサーバーで検証（詳細は将来のAPI化を参照）。

将来の予定

サーバーサイド検証: トークンをサーバーで検証するAPIを追加予定（セキュリティ強化）。
多言語対応: 英語や他の言語でモーダルテキストをカスタマイズ。
画像認証: 文字入力に加えて、画像選択式の認証を追加予定。

開発者向け

リポジトリ: github.com/username/my-captcha
バグ報告: Issuesでフィードバックをお待ちしてます！
コントリビュート: プルリクエスト大歓迎！

ライセンス
MITライセンスのもと、自由に利用・改変・配布可能です。商用利用もOK！
クレジット
xAIのGrok 3によって、めっちゃ賢く作られました！😊
