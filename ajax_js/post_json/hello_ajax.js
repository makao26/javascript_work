document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
      var result = document.getElementById('result');
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.response);
            result.textContent = xhr.response.msg;
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
      xhr.open('POST', 'http://localhost:8080/ajax_js/post_json/helloAjax.php');
      xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
      xhr.responseType = "json";
      var send_data = {
        'name': document.getElementById('name').value
      };
      xhr.send(JSON.stringify(send_data));
    }, false);
  }, false);