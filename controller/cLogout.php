<?php

if (!session_start()){
    
    session_start();
} 
session_destroy();
setcookie("PHPSESSID", "", time() - 3600);

setcookie("numVisits",0);

$response=array();

$response['error']="no error";  
$response['numVisits']=0;

echo json_encode($response);

