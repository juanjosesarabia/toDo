<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");

function ConnectionBD()
{

   $host = "localhost";
   $user = "root";
   $password = "";
   $BD = "task";

   $conn = new mysqli($host,$user,$password,$BD);

    if (!$conn) {
    echo "Error: Could not connect to MSQL." . PHP_EOL;
    exit;
    }


   return $conn;
}

ConnectionBD();
?>
