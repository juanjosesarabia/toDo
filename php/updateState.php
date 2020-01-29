<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");

$conn = ConnectionBD();

$task = $_GET['task'];
$state = $_GET['state'];



$resul1 = array();

	$query = 'UPDATE task SET `state`= "'.$state.'" WHERE `nameTask` ="'.$task.'"';
	$result = mysqli_query($conn, $query) or die('Failed query:'. mysqli_error());

	$n = mysqli_affected_rows($conn);


	if ($n!=0) {

    $resul1["validation"] = "ok";
    $resul1["message"] = "The status has been changed";

} else {

    $resul1["validation"] = "error";
    $resul1["message"] = "Something went wrong, try again";


}


mysqli_close($conn);

/*  */
$resul1Json = json_encode($resul1);

echo '' . $resul1Json . '';

?>
