<?php
include_once 'connect_data.php';
include_once 'datosCoviClass.php';

class datosCoviModel extends datosCoviClass{

    private $link;

    public function OpenConnect()
    {
        $konDat=new connect_data();
        try
        {
         $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
        }
        catch(Exception $e)
        {
        echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); 
    }                   
 
    public function CloseConnect()
    {
        $this->link->close();
    }
   

    public function listdatos()
    { 

        $this->OpenConnect();

        $id=$this->id_provincia;

       

        $sql = "select * from `datoscovi` where `cod_provincia`=$id";

        $result = $this->link->query($sql);

        $list=array();

        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $datos= new datosCoviModel();
            $datos->setPositivos($row['positivos']);
            $datos->setFallecidos($row['fallecidos']);

            array_push($list, get_object_vars($datos));
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }



    public function ObjVars()
    {
        return get_object_vars($this);
    }

}

