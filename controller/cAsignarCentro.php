<?php 
include_once '../model/centroModel.php';
include_once '../model/municipioModel.php';

$dato=json_decode(file_get_contents('php://input'),true);
// $dato=json_decode($dato);
$idPaciente=$dato['idPaciente'];
$Cod_municipio=$dato['Cod_municipio'];



$municipio = new municipioModel();
$municipio->setIdMunicipio($Cod_municipio);

$response = array();


$response['list']=$municipio->asignarcentro($idPaciente);







// $response['list']=$horario->mostrar($paciente);
$response['error']="no error";

echo json_encode($response);

