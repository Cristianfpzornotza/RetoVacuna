<?php 
include_once '../model/pacientesModel.php';

$data=json_decode(file_get_contents("php://input"),true);


$paciente = new pacientesModel();
$paciente->setIdPaciente($data);
$response['datos']=$paciente->pacienteById();

echo json_encode($response);

unset($response);
