<?php 
include_once '../model/horarioModel.php';
include_once '../model/centroModel.php';

$dato=json_decode(file_get_contents('php://input'),true);
// $dato=json_decode($dato);
$idPaciente=$dato['idpaciente'];
$dia=$dato['dia'];
// echo $idPaciente;
// echo $dia;


$horario = new horarioModel();
$horario->setCodDia($dia);

$response = array();


$response['list']=$horario->recogerHorario($idPaciente);







// $response['list']=$horario->mostrar($paciente);
$response['error']="no error";

echo json_encode($response);

