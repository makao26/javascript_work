$('#form_id').submit(function(){

    //
    // バリデーションチェックや、データの加工を行う。
    //
    window.confirm("これが確認ダイアログです。");
    //バリデーションチェックの結果submitしない場合、return falseすることでsubmitを中止することができる。
    return false;
})