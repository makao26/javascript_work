<?php
// sleep(3);
header('Content-Type: application/json; charset=UTF-8');
$json = file_get_contents("php://input");
if(empty($json)){
    $result['msg'] = 'はじめまして';
}else{
    $contents = json_decode($json, true);
    $result['msg'] = 'こんにちは、'.$contents['name'].'さん！';
    
}
print json_encode($result,JSON_PRETTY_PRINT);