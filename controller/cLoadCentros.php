<?php
include_once '../model/centroModel.php';

session_start(); 

//$data=json_decode(file_get_contents("php://input"),true);

$idAdmin=$_SESSION['idUser'];


$response=array();

if ($idAdmin !=null){
 
    $user=new centroModel();
    $response['perro']=$user->listCentros($idAdmin);
    

    /*
    if ($user->findUser()>0) // si es correcto el userName y el password
    {
        session_start();
        $_SESSION['idUser']=$user->getIdUsuario(); 
        $_SESSION['username']=$username; 
        
        $response['user']=$user->ObjVars(); 
        $response['error']="no error";  
        
    }  else {        
        $response['error']="Usuario o contraseña incorrecta"; // no correct user
    }*/

}  

echo json_encode($response);

unset($response);
