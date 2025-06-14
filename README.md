MyCaptcha
オリジナルreCAPTCHA風の検証ウィジェット！ボタンを押すと、ランダムな6文字を入力するモーダルが表示され、正しく入力すると「成功！」メッセージが出てボタンが無効化されます。シンプルで軽量、誰でも簡単にウェブサイトに統合できます！
デモ
GitHub Pagesでデモを試す！
特徴

簡単統合: 数行のHTMLとJavaScriptで設置完了！
軽量: クライアントサイドのみで動く、サーバー不要のシンプル設計。
カスタマイズ可能: 検証成功時にカスタムイベント（mycaptchaSuccess）を発火。
オープンソース: MITライセンスで自由に利用・改変OK！

インストール
以下の手順で、MyCaptchaをあなたのウェブサイトに追加できます！
1. スクリプトをHTMLに追加
以下の<script>タグを<head>または<body>に貼り付けます。CDN（jsDelivr）経由で提供しています。
```<script src="https://cdn.jsdelivr.net/gh/Nawadan1215/original-bot-check-v1@latest/client/mycaptcha.js"></script>```

注: Tailwind CSSを使用しているので、デザインを維持したい場合は以下も追加（オプション）。
```<script src="https://cdn.tailwindcss.com"></script>```

2. HTMLにMyCaptchaを埋め込む
```
<div id="mycaptcha"></div>を追加し、MyCaptcha.renderを呼び出します。
<div id="mycaptcha"></div>
<script>
  MyCaptcha.render('mycaptcha');
</script>
```
使い方

設置: 上記のコードをHTMLにコピペ。
動作:
ユーザーが「私はロボットではありません」ボタンをクリック。
モーダルが表示され、ランダムな6文字（英数字）を入力。
「検証」ボタン（またはEnterキー）でチェック。
正しい場合: 「成功！」メッセージが表示され、ボタンが無効化。mycaptchaSuccessイベントが発火。
間違った場合: エラーメッセージが表示され、再試行可能。


カスタム処理: 成功時にmycaptchaSuccessイベントをキャッチして、次のアクションを設定。

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
  <script src="https://cdn.jsdelivr.net/gh/Nawadan1215/original-bot-check-v1@latest/client/mycaptcha.js"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
  <div class="text-center">
    <h1 class="府-3xl font-bold mb-4">MyCaptcha デモ</h1>
    <div id="mycaptcha"></div>
  </div>
  <script>
    MyCaptcha.render('mycaptcha');
    document.getElementById('mycaptcha').addEventListener('mycaptchaSuccess', () => {
      console.log('検証成功！ここで次の処理を追加！');
      // 例: フォーム送信やページ遷移
    });
  </script>
</body>
</html>
```
カスタマイズ

ID変更: `<div id="mycaptcha">`を任意のIDに変更（例: `MyCaptcha.render('custom-id')`）。
スタイル: Tailwind CSSでカスタマイズ、または独自CSSを適用。
イベント処理: mycaptchaSuccessでカスタムロジックを実装。例:`document.getElementById('mycaptcha').addEventListener('mycaptchaSuccess', () => {
  alert('検証成功しました！');
});
`


バグ修正履歴

2025-06-14: ボタン押下でモーダルが消えるバグを修正。イベント競合を解消。

将来の予定

サーバーサイド検証: トークンをサーバーで検証するAPIを追加予定（セキュリティ強化）。
多言語対応: 英語や他の言語でモーダルテキストをカスタマイズ。
画像認証: 文字入力に加えて、画像選択式の認証を追加予定。

開発者向け

リポジトリ: github.com/Nawadan1215/original-bot-check-v1
バグ報告: Issuesでフィードバックをお待ちしてます！
コントリビュート: プルリクエスト大歓迎！

ライセンス
MITライセンスのもと、自由に利用・改変・配布可能です。商用利用もOK！
クレジット
made by @Nawadan1215
