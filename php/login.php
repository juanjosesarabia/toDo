<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");


$conn = ConnectionBD();
$user = $_POST['user'];
$password = $_POST['password'];



$info = array();
$envio = array();
$results = array();


$query = 'SELECT name FROM admin WHERE email ="' . $user . '" AND password = "'. $password . '"';
$result = mysqli_query($conn, $query) or die('Failed query: ' . mysqli_error());


if (!($row = mysqli_fetch_array($result, MYSQLI_ASSOC))) {

    $results["validation"] = "error";
    $results["message"] = "Error entering username and password";

} else {

	$results["validation"] = "ok";

    $results["message"] = "Welcome";

      mysqli_data_seek($result, 0);
      $row = mysqli_fetch_row($result);
      $_SESSION["name"]= $row[0];


          //Free memory
    mysqli_free_result($result);

}
mysqli_close($conn);
$results["data"] = $envio;

/* convert to json */
$resultsJson = json_encode($results);

echo '' . $resultsJson . '';
?>
