<?php 

include_once '../model/citasModel.php';

$dato=json_decode(file_get_contents('php://input'),true);
// $dato=json_decode($dato);
// $idPaciente=$dato['idpaciente'];
$fecha=$dato['Fecha'];
$codPaciente=$dato['Cod_paciente'];
$codVacuna=$dato['Cod_vacuna'];
$codCentro=$dato['Cod_centro'];
$codAnulacion=$dato['Cod_anulacion'];

// echo $idPaciente;
// echo $dia;


$cita = new citasModel();
if (isset($fecha)){
$cita->setFecha($fecha);

} if (isset($codPaciente)){
    $cita->setCodPaciente($codPaciente);
}
if (isset($codVacuna)){
    $cita->setCodVacuna($codVacuna);
}
if (isset($codCentro)){
    $cita->setCodCentro($codCentro);
}
if (isset($codAnulacion)){
    $cita->setCodAnulacion($codAnulacion);
}

$response = array();

$cita->insertarCita();


$response['list']=$cita->listCitasPaciente();
$response['error']="no error";

echo json_encode($response);