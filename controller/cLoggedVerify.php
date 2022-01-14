<?php
session_start(); 

$response=array();

/*
$_SESSION['idUser']=$user->getIdUsuario(); 
        $_SESSION['username']=$username; 
*/

if (isset($_SESSION['username']))
{
    $response["idUser"]=$_SESSION['idUser'];
    $response["username"]=$_SESSION['username']
    $response["error"]="Sesión iniciada";
}else{
    $response["error"]="Sesión no iniciada";
}
echo json_encode($response);