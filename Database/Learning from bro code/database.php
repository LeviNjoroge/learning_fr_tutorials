<?php

    $db_server = "localhost";
    $db_username = "root";
    $db_pass = "";
    $db_name = "businessdb";
    $conn = "";

    $conn = mysqli_connect($db_server, $db_username, $db_pass, $db_name);

    if($conn){
        echo "Connection Successful";
    }
    else{
        echo "Connection Failed";
    }
?>