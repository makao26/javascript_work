<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>モーダルウィンドウサンプル</title>
    <link rel="stylesheet" href="./modal.css">
    <script src="./js/vendor/jquery-1.10.2.min.js"></script>
    <!-- <script src="./js/modal.js"></script> -->
</head>
<body>
    <div class="content">
        <h1>Submit Modal test</h1>
        <!-- <a class="js-modal-open" href="">クリックでモーダルを表示</a> -->
        <form id="form_id" method="POST" action="./submit_disp.php">
            <label>名前を入力してください：</label>
            <input type="text" name="onamae" /><br />
            <label>メールアドレスを入力してください：</label>
            <input type="text" name="mail" />
            <button type="button" class="button1">送信</button>
        </form>
        <!-- <script src="./js/modal.js"></script> -->
    </div>
    <div class="modal js-modal">
        <div class="modal__bg js-modal-close"></div>
        <div class="modal__content">
            <p>ここにモーダルウィンドウで表示したいコンテンツを入れます。モーダルウィンドウを閉じる場合は下の「閉じる」をクリックするか、背景の黒い部分をクリックしても閉じることができます。</p>
            <button type="button" class="button2">次へ</button>
            <button type="button" class="button3">もう一度</button>
            <!-- <a class="js-modal-close" href="">閉じる</a> -->
        </div><!--modal__inner-->
    </div><!--modal-->
    <script src="./js/modal.js"></script>
</body>
</html>
