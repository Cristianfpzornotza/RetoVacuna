<?php 
include_once '../model/citasModel.php';

$data=json_decode(file_get_contents("php://input"),true);
$response=array();

$cita = new citasModel();

$response['list']=$cita->listCitas();

echo json_encode($response);

unset($response);
