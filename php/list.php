<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");


$conn = ConnectionBD();


$send = array();
$n;
$info;


$result = array();

$query = 'SELECT nameTask,state,name_responsible FROM task, responsible where task.id_responsible = responsible.id_responsible';
$response = mysqli_query($conn, $query) or die('Failed query: ' . mysqli_error());

if (!($row = mysqli_fetch_array($response, MYSQLI_ASSOC))) {
     $result["validation"] = "error";
     $result["menssage"] = "Unable to load data";

} else {
	$n = mysqli_num_rows($response);// 	returns a number of rows of the bd 
	$result["validation"] = "ok";
	$result["n"] = $n;

	if (isset($_SESSION['name'])){
		$result["session"] = $_SESSION["name"];
	}


  mysqli_data_seek($response, 0);// 
	while( $row = mysqli_fetch_array($response)){

					$nameTask = $row['nameTask'];
					$state = $row['state'];
					$name_responsible = $row['name_responsible'];					

				$info = array("nameTask"=>$nameTask, "state" => $state,"name_responsible" => $name_responsible);
    			array_push($send, $info);

				}


//Free memory
mysqli_free_result($response);
}
mysqli_close($conn);

$result["data"] = $send;

/* convert to json */
$resultJson = json_encode($result);

echo '' . $resultJson . '';
?>
