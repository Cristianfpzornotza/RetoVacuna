<?php 
include_once '../model/centroModel.php';

$data=json_decode(file_get_contents("php://input"),true);

echo $data;

$centro = new centroModel();
$centro->setIdCentro($data);

$response['datos']=$centro->findPacienteByCentro();

echo json_encode($response);

unset($response);
