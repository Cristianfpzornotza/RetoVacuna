<?php 
include_once '../model/historialModel.php';

$historial = new historialModel();

$response = array();

$dato=json_decode(file_get_contents('php://input'),true);
// $dato=json_decode($dato);
$idPaciente=$dato['idpaciente'];


$response['list']=$historial->mostrar($idPaciente);
$response['error']="no error";

echo json_encode($response);

unset($producto);