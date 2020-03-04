<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Submitボタン制御</title>
    <script src="./js/vendor/jquery-1.10.2.min.js"></script>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->
</head>
<body>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->
    <h1>Submit sample</h1>
    <form id="form_id" method="POST" action="./submit_disp.php">
        <label>名前を入力してください：</label>
        <input type="text" name="onamae" /><br />
        <label>メールアドレスを入力してください：</label>
        <input type="text" name="mail" />
        <button type="submit">送信</button>
    </form>
    <script src="./js/submit.js"></script>
</body>
</html>



