<?php
$option = $_POST['option'];

if ($option == 'star'){
    $ans = 1;
} else if ($option == 'moon'){
    $ans = 2;
} else if ($option == 'light'){
    $ans = 3;
} else if ($option == 'lighter'){
    $ans = 4;
}

$response = json_encode($ans);
echo $response;