<?php 
include_once '../model/citasModel.php';
include_once '../model/historialModel.php';


$data=json_decode(file_get_contents("php://input"),true);

$id=$data['id'];
$idpaciente=$data['idpaciente'];
$fecha=$data['fecha'];
$numerodosis=$data['nd'];
$vacunacode=$data['vc'];

$cita = new citasModel();
$cita->setIdCitas($id);
$cita->confirmarcitabyid();


$historial = new historialModel();
$historial->setCodPaciente($idpaciente);
$historial->setFecha($fecha);
$historial->setNumeroDosis($numerodosis);
$historial->setCodVacuna($vacunacode);
$historial->insertHistorial();



echo json_encode($response);

unset($response);
