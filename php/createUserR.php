<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");

$conn = ConnectionBD();

$name = $_POST['name'];



$result = array();


$query1 = 'SELECT * FROM responsible WHERE name_responsible ="' . $name. '"';
$result1 = mysqli_query($conn, $query1) or die('Failed query 1: ' . mysqli_error());

if (!($row = mysqli_fetch_array($result1, MYSQLI_ASSOC))) {
  
$query = 'INSERT INTO responsible (name_responsible) VALUES ("' .$name.'");';

echo $query;
$result2 = mysqli_query($conn,$query) or die('Failed query 2: ' . mysqli_error());

if (!($result2)) {

    $result["validation"] = "error";
    $result["message"] = "I don't register";

} else {
	$result["validation"] = "ok";
    $result["message"] = "Successfully registered";

}
mysqli_close($conn);

/*  */
$resultJson = json_encode($result);

/*  */
echo '' . $resultJson . '';

} else {

    $resultados["validation"] = "error";
    $resultados["message"] = "Duplicate name";

    $resultJson = json_encode($resultados);

/*  */
echo '' . $resultJson . '';

}

?>
