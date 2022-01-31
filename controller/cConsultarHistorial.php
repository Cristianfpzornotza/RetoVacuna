<?php 
include_once '../model/historialModel.php';
include_once '../model/citasModel.php';


$historial = new historialModel();
$citas = new citasModel();

$response = array();

$dato=json_decode(file_get_contents('php://input'),true);
// $dato=json_decode($dato);
$idPaciente=$dato['idpaciente'];

$response['listacitas']=$citas->listCitas();
$response['list']=$historial->mostrar($idPaciente);
$response['error']="no error";

echo json_encode($response);

unset($producto);