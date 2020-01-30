<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
include("connection.php");

$conn = ConnectionBD();

$name1 = $_POST['name1'];
$state1 = $_POST['state1'];
$responsible1 = $_POST['responsible1'];

$name2 = $_POST['name2'];
$state2 = $_POST['state2'];
$responsible2 = $_POST['responsible2'];


$result = array();










$query1 = 'UPDATE responsible SET `name_responsible`= "'.$responsible2.'" WHERE `name_responsible` ="'.$responsible1 .'"';

$result1 = mysqli_query($conn, $query1) or die('Failed query:: ' . mysqli_error());
 
$n = mysqli_affected_rows($conn);

if ($n!=0) {

    $resultados["validacion"] = "ok";
    $resultados["mensaje"] = "Los datos se han modificado";


    $query2 = 'SELECT id_responsible FROM responsible WHERE name_responsible ="' . $responsible2 . '"';
    $result2 = mysqli_query($conn, $query2) or die('Failed query:: ' . mysqli_error());
    


    if (!($row = mysqli_fetch_array($result2, MYSQLI_ASSOC))) {
        $result["validation"] = "error";
        $result["menssage"] = "Error getting data";

                }else{

                    mysqli_data_seek($result2, 0);
                    $row = mysqli_fetch_array($result2);
                    $idResponsible =$row[0];

                    echo $idResponsible;

                    $query3 = 'UPDATE task SET `nameTask`= "'.$name2.'",`state`= "'.$state2.'",`id_responsible`= "'.$idResponsible.'" WHERE `nameTask` ="'.$name1 .'"AND `state` ="'.$state1 .'"';
                    $result3 = mysqli_query($conn, $query3) or die('Failed query:: ' . mysqli_error());


                        if (!($row = mysqli_fetch_array($result3, MYSQLI_ASSOC))) {
                                $result["validation"] = "error";
                                $result["menssage"] = " Error updating data";
                            }else{

                                $result["validation"] = "ok";
                                $result["message"] = "The data has been updated";
                            }}



} else {

    $result["validation"] = "error";
    $result["menssage"] = "Error updating responsible";

}
                      
                                                                               



mysqli_close($conn);

/* convert to json */
$resultJson = json_encode($result);

echo '' . $resultJson . '';


?>