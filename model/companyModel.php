<?php
include_once 'connect_data.php';
include_once 'companyClass.php';
include_once 'sectorClass.php';

class companyModel extends companyClass{
    
    private $link;
    private $objSector;  // una compania perten2ce a  un unico sector
 
    
    /**
     * @return mixed
     */
    public function getObjSector()
    {
        return $this->objSector;
    }

    /**
     * @param mixed $objSector
     */
    public function setObjSector($objSector)
    {
        $this->objSector = $objSector;
    }

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
    
    public function insert()
     {
         $this->OpenConnect();
         $sql="call spInsertCompany('$this->name','$this->tel','$this->address',$this->idSector,'$this->logo','$this->web')";
        echo $sql;
         $this->link->query($sql);
         $this->CloseConnect();
     }
    public function maxId()
    {
         $this->OpenConnect();
         $sql="call spMaxIdCompany()";
         $result=$this->link->query($sql);
         $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
         
         $this->CloseConnect();
         return $row['maxId'];
    }

   
    public function ObjVars()
    {
        return get_object_vars($this);
    }
     
}
