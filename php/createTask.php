<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");

$conn = ConnectionBD();

$name = $_POST['name'];
$state = $_POST['state'];
$responsible = $_POST['responsible'];


$result = array();

$query = 'INSERT INTO task(nameTask, state, id_responsible) VALUES ("' . $name . '","' . $state . '","' . $responsible . '")';
$result1 = mysqli_query($conn, $query) or die('Failed query:: ' . mysqli_error());


if (!($result1)) {

    $result["validation"] = "error";
    $result["message"] = "The task was not created";

} else {
	$result["validation"] = "ok";
    $result["message"] = "Task successfully created";

}

mysqli_close($conn);

/* convert to json */
$resultJson = json_encode($result);

echo '' . $resultJson . '';


?>
