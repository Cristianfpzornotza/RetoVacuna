<?php
include_once '../model/usuariosModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$nombre=$data['nombre'];
$contraseña=$data['contraseña'];

$contraseña=password_hash("$contraseña", PASSWORD_DEFAULT);

$response=array();

if (( $nombre !=null ) && ( $contraseña !=null )){
 
    $user=new usuariosModel();
    $user->setName($nombre);
    $user->setContrasena($contraseña);

    $user->insertaradmin();


    $response['error']="no error";
    

}  else {
    
    $response['error']="Faltan campos por rellenar";     // not filled user or password

}

echo json_encode($response);

unset($response);