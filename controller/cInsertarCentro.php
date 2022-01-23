<?php
include_once '../model/centroModel.php';
include_once '../model/municipioModel.php';

$data=json_decode(file_get_contents("php://input"),true);

$nombrecentro=$data['nombrecentro'];
$municipio1=$data['municipio1'];
$municipio2=$data['municipio2'];
$municipio3=$data['municipio3'];
$imgcentro=$data['imgcentro'];

echo $nombrecentro,$municipio1,$municipio2,$municipio3,$imgcentro;

$response=array();

if (( $nombrecentro !=null ) && ( $municipio1 !=null ) && ( $municipio2 !=null ) && ( $municipio3 !=null ) && ( $imgcentro !=null )){
 
    $centro=new centroModel();
    $centro->setName($nombrecentro);
    $centro->setImg($imgcentro);

    $response['idCentro']=$centro->insertarcentro();

    $municipio=new municipioModel();
    $municipio->setCodCentro($response['idCentro']);


    if($municipio1!="vacio"){
        $municipio->setName($municipio1);
        $municipio->insertarmunicipio();
    }
    if($municipio2!="vacio"){
        $municipio->setName($municipio2);
        $municipio->insertarmunicipio();
    }
    if($municipio3!="vacio"){
        $municipio->setName($municipio3);
        $municipio->insertarmunicipio();
    }
    

    $response['error']="no error";
    

}  else {
    
    $response['error']="Faltan campos por rellenar";     // not filled user or password

}

echo json_encode($response);

unset($response);