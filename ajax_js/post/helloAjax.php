<?php
sleep(3);
if(empty($_POST['name'])){
    print('はじめまして');
}else{
    print('こんにちは、'.$_POST['name'].'さん！');
}