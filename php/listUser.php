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
$query = 'SELECT name_responsible FROM responsible';
$answer = mysqli_query($conn, $query) or die('Failed query:: ' . mysqli_error());

if (!($row = mysqli_fetch_array($answer, MYSQLI_ASSOC))) {
     $result["validation"] = "error";
     $result["message"] = "Unable to load data";

} else {
	$n = mysqli_num_rows($answer);//   returns a number of rows of the bd
	$result["validation"] = "ok";
	$result["n"] = $n;

	if (isset($_SESSION['name'])){
	$result["sesion"] = $_SESSION["name"];
}


  mysqli_data_seek($answer, 1);// verify data load
	while( $row = mysqli_fetch_array($answer)){
					$nameTask = $row['name_responsible'];

				$info = array("name_responsible" => $nameTask);
				array_push($send, $info);
				}




mysqli_free_result($answer);
}
mysqli_close($conn);

$result["data"] = $send;
/* convierte los result a formato json */
$resultJson = json_encode($result);

echo '' . $resultJson . '';
?>