<?php 
include_once '../model/CondicionesModel.php';

$condiciones = new condicionesModel();

$response = array();


$response['list']=$condiciones->listCondiciones();
$response['error']="no error";

echo json_encode($response);

unset($condiciones);