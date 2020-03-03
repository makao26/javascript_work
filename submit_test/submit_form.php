<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>jQuery動作チェック</title>
</head>
<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <h1>Qiita Submit sample</h1>
    <form id="form_id" method="POST" action="./submit_disp.php">
        <label>名前を入力してください：</label>
        <input type="text" name="onamae" /><br />
        <label>メールアドレスを入力してください：</label>
        <input type="text" name="mail" />
        <button type="submit">送信</button>
    </form>
    <script type="text/javascript">
        
            $('#form_id').submit(function(){
                //
                // バリデーションチェックや、データの加工を行う。
                //
                window.confirm("これが確認ダイアログです。");
                //バリデーションチェックの結果submitしない場合、return falseすることでsubmitを中止することができる。
                return false;
            });
    </script>
</body>
</html>



