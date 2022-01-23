<?php
include_once 'connect_data.php';
include_once 'municipioClass.php';

class municipioModel extends municipioClass{

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
    
    public function listmunicipios(){
        $this->OpenConnect();

        $sql="select * from municipio";

        $result= $this->link->query($sql);

        $list=array();
       
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            
            $municipio = new municipioModel();
            $municipio->setIdMunicipio($row['idMunicipio']);
            $municipio->setName($row['Nombre']);
            $municipio->setCodCentro($row['Cod_centro']);

            array_push($list, get_object_vars($municipio));
            
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
       

    }

    public function insertarmunicipio(){
        $this->OpenConnect();

        $sql="insert INTO municipio(Nombre, Cod_centro) VALUES ($this->name,$this->codCentro)";

        $result= $this->link->query($sql);

        $this->CloseConnect();
        return "no error";
       
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

