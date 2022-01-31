<?php
include_once '../model/centroModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$idCentro=$data['idCentro'];
$imgCentro=$data['imgCentro'];
$nombreCentro=$data['nombreCentro'];


$response=array();

if (( $idCentro !=null ) && ( $nombreCentro !=null ) && ( $imgCentro !=null )){
 
    $centro=new centroModel();
    $centro->setIdCentro($idCentro);
    $centro->setImg($imgCentro);  
    $centro->setName($nombreCentro);

    $response['centro']=$centro->updatecentro();
  
    $response['error']="no error";
    

}  else {
    
    $response['error']="Faltan campos por rellenar";     // not filled user or password

}

echo json_encode($response);

unset($response);