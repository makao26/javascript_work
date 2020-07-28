document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
      var result = document.getElementById('result');
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            result.textContent = xhr.responseText;
          } else {
            result.textContent = 'サーバーエラーが発生しました。';
          }
        } else {
          result.textContent = '通信中...';
        }
      };
      /*
      xhr.addEventListener('loadstart', function() {
        result.textContent = '通信中...';
      }, false);
  
      xhr.addEventListener('load', function() {
        result.textContent = xhr.responseText;
      }, false);
  
      xhr.addEventListener('error', function() {
        result.textContent = 'サーバーエラーが発生しました。';
      }, false);
      */
      // xhr.open('GET', 'hello_ajax.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
      // xhr.send(null);
      xhr.open('POST', 'http://localhost:8080/ajax_js/post/helloAjax.php');
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      xhr.send( 'name=' + document.getElementById('name').value );
    }, false);
  }, false);