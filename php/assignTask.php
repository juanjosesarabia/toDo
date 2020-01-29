<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");

$conn = ConnectionBD();

$name = $_POST['name'];
$state = $_POST['state'];
$responsible = $_POST['responsible'];


$result = array();


$query1 = 'SELECT id_responsible FROM responsible WHERE name_responsible ="' . $responsible . '"';
$result2 = mysqli_query($conn, $query1) or die('Consulta fallida: ' . mysqli_error());



if (!($row = mysqli_fetch_array($result2, MYSQLI_ASSOC))) {
    $result["validation"] = "error";
    $result["menssage"] = "Cannot load data";
}else{

    mysqli_data_seek($result2, 0);
    $row = mysqli_fetch_array($result2);
    $idResponsible =$row[0];



echo $idResponsible;
$query = 'UPDATE task SET `id_responsible`= "'.$idResponsible.'" WHERE `nameTask` ="'.$name .'"';

$result1 = mysqli_query($conn, $query) or die('Failed query:: ' . mysqli_error());


if (!($result1) and !($result2)) {

    $result["validation"] = "error";
    $result["message"] = "The person in charge has not been assigned";

} else {
	$result["validation"] = "ok";
    $result["message"] = "The task has been assigned";

}


}
mysqli_close($conn);

/* convert to json */
$resultJson = json_encode($result);

echo '' . $resultJson . '';


?>