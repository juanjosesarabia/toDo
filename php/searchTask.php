<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");

$conn = ConnectionBD();

$task = $_GET['task'];

$sent = array();
$result = array();

$query ='SELECT nameTask,state,name_responsible FROM task, responsible where task.id_responsible = responsible.id_responsible  and nameTask = "' . $task . '"';
$result1 = mysqli_query($conn, $query) or die('Failed query: ' . mysqli_error());

if (!($row = mysqli_fetch_array($result1, MYSQLI_ASSOC))) {

    $result["validation"] = "error";
    $result["message"] = "Task not found";

} else {

    $result["validation"] = "ok";


        mysqli_data_seek($result1, 0);
         $row = mysqli_fetch_array($result1);
		 $data = array("nameTask"=>$row[0],"state" => $row[1], "name_responsible" => $row[2]);

		array_push($sent, $data);


 ////Free memory
mysqli_free_result($result1);
}
mysqli_close($conn);


$result["task"] = $sent;
/* convert to json */
$resultJson = json_encode($result);


echo '' . $resultJson . '';



?>
