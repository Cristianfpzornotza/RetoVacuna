<?php 
include_once '../model/userCompaniesModel.php';


$response=array();

session_start();
if (isset($_SESSION['idUser']))
{
    $idUser= $_SESSION['idUser'];

    $userCompanies=new userCompaniesModel();
    $userCompanies->setIdUser($idUser);
    
    $response['username']=$_SESSION['userName'];
    
    $response['list']=$userCompanies->setUserCompaniesList();
    $response['error']="no error"; 

} else {
    $response['error']="no logged";     
}
echo json_encode($response);

unset($response);
