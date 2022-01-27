<?php
include_once '../model/centroModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$idCentro=$data['idCentro'];
$imgCentro=$data['imgCentro'];
$nombreCentro=$data['nombreCentro'];

//echo $nombrecentro,$municipio1,$municipio2,$municipio3,$imgcentro;

$response=array();

if (( $idCentro !=null ) && ( $imgCentro !=null ) && ( $nombreCentro !=null )){
 
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