<?php
include_once 'connect_data.php';
include_once 'citasClass.php';

class citasModel extends citasClass{

    private $link;

    public function OpenConnect()
    {
        $konDat=new connect_data();
        try
        {
         $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
         // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
         // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexión. 
        }
        catch(Exception $e)
        {
        echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta 
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }                   
 
    public function CloseConnect()
    {
        //mysqli_close ($this->link);
        $this->link->close();
    }

    public function insertarCita(){

        $this->OpenConnect();
        $Fecha=$this->Fecha;
        $Cod_paciente=$this->Cod_paciente;
        $Cod_vacuna=$this->Cod_vacuna;
        $Cod_centro=$this->Cod_centro;
        $Cod_anulacion=$this->Cod_anulacion;

        $sql="INSERT INTO citas (Fecha, Cod_paciente, Cod_vacuna, Cod_centro, Cod_anulacion) VALUES ($Fecha,$Cod_paciente,$Cod_vacuna, $Cod_centro,$Cod_anulacion)";

        $result= $this->link->query($sql);

        $list=array();

        
        mysqli_free_result($result);
        $this->CloseConnect();
    
       

    }
    public function ObjVars()
    {
        return get_object_vars($this);
    }

}

