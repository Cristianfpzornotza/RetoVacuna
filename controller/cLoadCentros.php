<?php
include_once '../model/centroModel.php';

session_start(); 

//$data=json_decode(file_get_contents("php://input"),true);

$idAdmin=$_SESSION['idUser'];


$response=array();

if ($idAdmin !=null){
 
    $user=new centroModel();
    $response['perro']=$user->listCentros($idAdmin);

}  

echo json_encode($response);

unset($response);
