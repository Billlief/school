<?php
#產生PDO物件
$db_host = 'localhost';
$db_name = 'school';
$db_user = 'root';
$db_password = '';
$dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8mb4";
$conn = new PDO($dsn, $db_user, $db_password);

#$sql = 'SQL指令';//查詢/修改/新增/刪除資料

$sql = "SELECT * FROM `student`";//查詢資料


$stmt = $conn->prepare($sql);
$result = $stmt->execute();//執行SQL指令

if($result) {
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);//取得所有資料
    $response['status'] = 200;//OK
    $response['message'] = '查詢成功!';
    $response['result'] = $rows;

    echo '執行成功!';
} else {
    $response['status'] = 400;//Bad Request
    $response['message'] = 'SQL錯誤';
    echo '執行失敗!';
}
echo json_encode($response);