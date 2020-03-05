<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>フォームからPOSTで送信されたデータを表示</title>
</head>
<body>
<?php
  echo $_POST["onamae"] ."さんのメールアドレスは". $_POST["mail"] ."です。";
?>
</form>
</body>
</html>