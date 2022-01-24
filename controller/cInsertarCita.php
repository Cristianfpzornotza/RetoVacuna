<?php 

include_once '../model/citasModel.php';

$dato=json_decode(file_get_contents('php://input'),true);
// $dato=json_decode($dato);
$idPaciente=$dato['idpaciente'];
$Fecha=$dato['Fecha'];
$Cod_paciente==$dato['Cod_paciente'];
$Cod_vacuna=$dato['Cod_vacuna'];
$Cod_centro=$dato['Cod_centro'];
$Cod_anulacion=$dato['Cod_anulacion'];

// echo $idPaciente;
// echo $dia;


$cita = new citasModel();
if (isset($Fecha)){
$cita->setFecha($Fecha);

} if (isset($Cod_paciente)){
    $cita->setCodPaciente($Cod_paciente);
}
if (isset($Cod_vacuna)){
    $cita->setCodVacuna($Cod_vacuna);
}
if (isset($Cod_centro)){
    $cita->setCodCentro($Cod_centro);
}
if (isset($Cod_anulacion)){
    $cita->setCodAnulacion($Cod_anulacion);
}

$response = array();


$response['list']=$cita->insertarCita();
$response['error']="no error";

echo json_encode($response);