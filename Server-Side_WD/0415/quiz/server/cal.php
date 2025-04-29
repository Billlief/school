<?php
//接收前端傳過來的資料
$chi = $_POST['chi'];
$eng = $_POST['eng'];
$math = $_POST['math'];

//處理
$sum = $chi + $eng + $math;
$avg = $sum / 3;

//將結果編成json格式回傳
$response =json_encode($avg);
echo $response;

