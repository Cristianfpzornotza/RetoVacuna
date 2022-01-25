<?php 
include_once '../model/citasModel.php';

$data=json_decode(file_get_contents("php://input"),true);
$response=array();

$cita = new citasModel();
$idPaciente=$data['idpaciente'];
$response['list']=$cita->listCitasPaciente($idPaciente);
$response['error']="no error";
echo json_encode($response);

unset($response);