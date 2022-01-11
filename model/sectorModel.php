<?php

class sectorModel extends sectorClass{
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
 
  

    function setList()
    {
        $this->OpenConnect();
        $sql="call spSectorList()";       
        $result= $this->link->query($sql);
        $this->link->close();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $new=new self();
            $new->setIdSector($row['idSector']);
            $new->setName($row['name']);
            $new->setEuro($row['€']);
            
            array_push($this->list, $new);
        }
       
    }
    
    function getObjectCompanyList($idSector) 
    {
        $this->OpenConnect();
        $sql="call spCompanyListBySector('$idSector')";       
        $result= $this->link->query($sql);
        $this->link->close();
       while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
           
//            include_once 'companyClass.php';
//            include_once 'companyModel.php';
           
//            $newComp=new companyModel();
//            $newComp->setIdCompany($row['idCompany']);
//            $newComp->setName($row['name']);
           
          array_push($this->list, $row);          
        }
       return $this->list;
    }
    public function ObjVars()
    {
        return get_object_vars($this);
    }
    

}
