<?php 
include_once '../model/pacientesModel.php';

$data=json_decode(file_get_contents("php://input"),true);


$idpaciente=$data['id'];
$img=$data['foto'];


$paciente = new pacientesModel();
$paciente->setIdPaciente($idpaciente);
$paciente->setImg($img);
$paciente->updatefoto();


echo json_encode($response);

unset($response);
