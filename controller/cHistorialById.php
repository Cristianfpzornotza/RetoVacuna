<?php 
include_once '../model/historialModel.php';
include_once '../model/citasModel.php';

$data=json_decode(file_get_contents("php://input"),true);


$historial = new historialModel();
$historial->setCodPaciente($data);
$response['datos']=$historial->setHistorialById();


$citas = new citasModel();
$citas->setCodPaciente($data);
$response['datos2']=$citas->setCitasById();


echo json_encode($response);

unset($response);
