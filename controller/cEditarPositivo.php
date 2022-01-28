<?php 
include_once '../model/pacientesModel.php';

$data=json_decode(file_get_contents("php://input"),true);


$idpaciente=$data['id'];
$positivo=$data['positivo'];


$paciente = new pacientesModel();
$paciente->setIdPaciente($idpaciente);
$paciente->setFechaPos($positivo);
$paciente->updatepositivo();


echo json_encode($response);

unset($response);
