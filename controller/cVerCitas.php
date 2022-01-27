<?php 
include_once '../model/citasModel.php';

$data=json_decode(file_get_contents("php://input"),true);
$response=array();

$cita = new citasModel();
$idPaciente=$data['idpaciente'];

$cita->setCodPaciente($idPaciente);

$response['list']=$cita->listCitasPaciente();
$response['error']="no error";
echo json_encode($response);

unset($response);