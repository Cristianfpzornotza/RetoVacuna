<?php
include_once '../model/usuariosModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$username=$data['username'];
$password=$data['password'];

$response=array();

if (( $username !=null ) && ( $password !=null )){
 
    $user=new usuariosModel();
    $user->setName($username);
    $user->setContrasena($password);
    
    if ($user->findUser()>0) // si es correcto el userName y el password
    {
        session_start();
        $_SESSION['idUser']=$user->getIdUsuario(); 
        $_SESSION['username']=$username; 
        
        $response['user']=$user->ObjVars(); 
        $response['error']="no error";  
        
    }  else {        
        $response['error']="Usuario o contraseña incorrecta"; // no correct user
    }
}  else {
    
    $response['error']="Error! Usuario o contraseña vacias";     // not filled user or password
}

echo json_encode($response);

unset($response);
