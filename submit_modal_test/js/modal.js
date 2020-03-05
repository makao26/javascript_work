$(function(){
    var a = false;
    // $('.js-modal-open').on('click',function(){
    //     $('.js-modal').fadeIn();
    //     return false;
    // });
    // $('.js-modal-close').on('click',function(){
    //     $('.js-modal').fadeOut();
    //     return false;
    // });
    // $('#form_id').submit(function(){
    //     //
    //     // バリデーションチェックや、データの加工を行う。
    //     //
    //     alert('Debug');
    //     //var result = window.confirm("これが確認ダイアログです。");
    //     $('.js-modal').fadeIn();
        
    //     console.log(a);
    //     return a;
    // });
    
    $('.button1').on('click',function(){
        $('.js-modal').fadeIn();
        a = true;
        console.log(a);
    });

    $('.button2').on('click',function(){
        $('.js-modal').fadeOut();
        $('#form_id').submit();
    });

    $('.button3').on('click',function(){
        $('.js-modal').fadeOut();
    });

    
});
//クラス属性を活用したセレクタの指定方法：.class属性
