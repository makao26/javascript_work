$(function(){
$('#form_id').submit(function(){
    //
    // バリデーションチェックや、データの加工を行う。
    //
    // var result = window.confirm("これが確認ダイアログです。");
    
    if(result){
        return true;
    }else{
        //バリデーションチェックの結果submitしない場合、return falseすることでsubmitを中止することができる。
        return false;
    }
});
});