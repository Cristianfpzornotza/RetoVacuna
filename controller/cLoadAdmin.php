<?php
include_once '../model/usuariosModel.php';


$response=array();


$user=new usuariosModel();
$response['admin']=$user->listUsuarios();


echo json_encode($response);

unset($response);
