<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");

$conn = ConnectionBD();

	$send = array();
  $n;

$result = array();

///
$query = 'SELECT name_Responsible FROM responsible';
$answer = mysqli_query($conn, $query) or die('Failed query:: ' . mysqli_error());

if (!($row = mysqli_fetch_array($answer, MYSQLI_ASSOC))) {
     $result["validation"] = "error";
     $result["message"] = "Unable to load data";

} else {
	$n = mysqli_num_rows($answer);// 	returns a number of rows of the bd
	$result["validation"] = "ok";
	$result["n"] = $n;

	
}


  mysqli_data_seek($answer, 0);// verify data load
	while( $row = mysqli_fetch_array($answer)){
					$nameResponsible = $row['name_Responsible'];

				$info = array("nameResponsible" => $nameResponsible);
				array_push($send, $info);
				}

            


mysqli_free_result($answer);

mysqli_close($conn);

$result["data"] = $send;
/*  convert to json */ 
$resultJson = json_encode($result);

echo '' . $resultJson . '';
?>