<?php 
include_once '../model/pacientesModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$municipio=$data['municipio'];
$idpaciente=$data['idpaciente'];

$paciente = new pacientesModel();
$paciente->setIdPaciente($idpaciente);
$paciente->updateMunicipioPaciente($municipio);


echo json_encode($response);

unset($response);
