<?php
include_once '../model/pacientesModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$nombre=$data['nombrepaciente'];
$apellido=$data['apellidopaciente'];
$dni=$data['dnipaciente'];
$municipio=$data['municipiopaciente'];
$fecha=$data['fechapaciente'];
$TIS= mt_Rand(00000000,99999999);

$response=array();

if (( $nombre !=null ) && ( $apellido !=null ) && ( $dni !=null ) && ( $municipio !=null ) && ( $fecha !=null ) && ( $TIS !=null )){
 
    $paciente=new pacientesModel();
    $paciente->setName($nombre);
    $paciente->setApellido($apellido);
    $paciente->setDNI($dni);
    $paciente->setCodMunicipio($municipio);
    $paciente->setFechaNac($fecha);
    $paciente->setTIS($TIS);

    $paciente->insertarpaciente();
    $respone['error']="no error";
    

}  else {
    
    $response['error']="Faltan campos por rellenar";     // not filled user or password

}

echo json_encode($response);

unset($response);