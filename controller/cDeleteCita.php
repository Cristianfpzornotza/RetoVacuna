<?php 
include_once '../model/citasModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$citas = new citasModel();
$citas->setCodAnulacion($data);

$response['error']="error";

if($citas->deleteCitaByCod() == 1){
    $response['error']="eliminado";
}else{
    $response['error']="no eliminado";
}


echo json_encode($response);

unset($response);
