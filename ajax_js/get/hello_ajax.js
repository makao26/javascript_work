document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
      var result = document.getElementById('result');
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            result.textContent = xhr.responseText;
          } else {
            result.textContent = '�T�[�o�[�G���[���������܂����B';
          }
        } else {
          result.textContent = '�ʐM��...';
        }
      };
      /*
      xhr.addEventListener('loadstart', function() {
        result.textContent = '�ʐM��...';
      }, false);
  
      xhr.addEventListener('load', function() {
        result.textContent = xhr.responseText;
      }, false);
  
      xhr.addEventListener('error', function() {
        result.textContent = '�T�[�o�[�G���[���������܂����B';
      }, false);
      */
      xhr.open('GET', 'hello_ajax.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
      xhr.send(null);
    }, false);
  }, false);