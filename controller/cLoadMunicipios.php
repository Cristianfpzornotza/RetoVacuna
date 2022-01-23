<?php 
include_once '../model/municipioModel.php';


$municipio = new municipioModel();

$response['municipios']=$municipio->listmunicipios();

echo json_encode($response);

unset($response);
