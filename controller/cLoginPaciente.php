<?php
include_once '../model/pacientesModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$TIS=$data['TIS'];
$apellido=$data['apellido'];
$fecha=$data['fecha'];

$response=array();

if (( $TIS !=null ) && ( $apellido !=null ) && ( $fecha !=null )){
 
    $user=new pacientesModel();
    $user->setFechaNac($fecha);
    $user->setApellido($apellido);
    $user->setTIS($TIS);
    
    if ($user->findPaciente()) // si es correcto el userName y el password
    {
        session_start();
        $_SESSION['idPaciente']=$user->getIdPaciente(); 
        $_SESSION['paciente']=$user->ObjVars(); 
        
        $response['error']="no error";  
        
    }  else {        
        $response['error']="incorrect TIS/apellido/fecha"; // no correct user
    }
}  else {
    
    $response['error']="TIS, apellido or fecha not filled";     // not filled user or password
}

echo json_encode($response);

unset($response);
