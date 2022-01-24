<?php
include_once 'connect_data.php';
include_once 'condicionesClass.php';

class condicionesModel extends condicionesClass{

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
    
    public function listCondiciones(){
        $this->OpenConnect();

        $sql="SELECT * FROM `condiciones`;";

        $result= $this->link->query($sql);

        $list=array();
       
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            
            $condiciones = new condicionesModel();
            $condiciones->setDosisHasta11($row['DosisHasta11']);
            $condiciones->setDosisDesde11($row['DosisDesde11']);
            $condiciones->setTiempoEntreDosis($row['TiempoEntreDosis/PCR']);

            array_push($list, get_object_vars($condiciones));
            
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
       

    }
 
    public function CloseConnect()
    {
        //mysqli_close ($this->link);
        $this->link->close();
    }
   
    public function ObjVars()
    {
        return get_object_vars($this);
    }

}