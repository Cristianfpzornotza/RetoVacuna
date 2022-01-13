<?php 
include_once '../model/historialModel.php';

$historial = new historialModel();

$response = array();

// $dato=file_get_contents('php://input');
// $dato=json_decode($dato);

// $idCuentaBancaria=$dato->idCuentaBancaria;

$paciente="1";


$response['list']=$historial->mostrar($paciente);
$response['error']="no error";

echo json_encode($response);

unset($producto);