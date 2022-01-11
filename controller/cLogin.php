<?php
include_once '../model/userModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$username=$data['username'];
$password=$data['password'];

$response=array();

if (( $username !=null ) && ( $password !=null )){
 
    $user=new userModel();
    $user->setUsername($username);
    $user->setPassword($password);
    
    if ($user->findUser()>0) // si es correcto el userName y el password
    {
        session_start();
        $_SESSION['isUser']=$user->getIdUser(); 
        $_SESSION['username']=$username; 
        
        $response['user']=$user->ObjVars(); 
        $response['error']="no error";  
        
        if ($user->AdminVerify()) // this function returns 1 or 0 ig the user is admin
        {
            $_SESSION['admin']=1;
            $response['admin']=1;
        } else {
            $_SESSION['admin']=0;
            $response['admin']=0;
        }
    }  else {        
        $response['error']="incorrect user/password"; // no correct user
    }
}  else {
    
    $response['error']="username or password not filled";     // not filled user or password
}

echo json_encode($response);

unset($response);
