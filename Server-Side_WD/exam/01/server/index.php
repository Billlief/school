<?php
$point = $_POST['point'];

if ($point <= 5000){
    $money = $point * 0.1;
} else if ($point <= 10000){
    $money = $point * 0.12;
} else if ($point > 10000){
    $money = $point * 0.15;
}

$response = json_encode($money);
echo $response;