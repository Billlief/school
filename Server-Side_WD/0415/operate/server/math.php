<?php
//接收前端傳過來的資料
$a = $_POST['a'];
$b = $_POST['b'];
$op = $_POST['op'];

//處理
if ($op == '+') {
    $ans = $a + $b;
} else if ($op == '-') {
    $ans = $a - $b;
} else if ($op == '*') {
    $ans = $a * $b;
} else if ($op == '/') {
    $ans = $a / $b;
} else {
    $ans = '無效運算符號';
}
//將結果編成json格式回傳
$response = json_encode($ans);
echo $response;