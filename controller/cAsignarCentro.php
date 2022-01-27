<?php 
include_once '../model/administraModel.php';

$data=json_decode(file_get_contents("php://input"),true);


$Codusuario=$data['asignarusuarioid'];
$Codcentro=$data['asignarcentroid'];


$administra = new administraModel();
$administra->setCodcentro($Codcentro);
$administra->setCodusuario($Codusuario);
$administra->asignarcentro();


echo json_encode($response);

unset($response);
