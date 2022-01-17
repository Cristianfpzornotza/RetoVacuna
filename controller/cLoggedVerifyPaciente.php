<?php
session_start(); 

$response=array();

/*
$_SESSION['idUser']=$user->getIdUsuario(); 
        $_SESSION['username']=$username; 
*/

if (isset($_SESSION['idPaciente']))
{
    $response["idPaciente"]=$_SESSION['idPaciente'];
    $response["paciente"]=$_SESSION['paciente'];
    $response["error"]="Sesión iniciada";
}else{
    $response["error"]="Sesión no iniciada";
}
echo json_encode($response);