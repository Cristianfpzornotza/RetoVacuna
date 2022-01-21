<?php 
include_once '../model/citasModel.php';

$data=json_decode(file_get_contents("php://input"),true);


$citas = new citasModel();
$citas->setCodPaciente($data);

$response['citas']=$citas->loadcitasbypaciente();

echo json_encode($response);

unset($response);
