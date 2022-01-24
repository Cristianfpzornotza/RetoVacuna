<?php 
include_once '../model/datosCoviModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$id=$data['id_provincia'];


$datos = new datosCoviModel();
$datos->setId_provincia($id);



$response['datos']=$datos->listdatos();

echo json_encode($response);

unset($response);
