<?php
include_once 'connect_data.php';
include_once 'centroClass.php';

class centroModel extends centroClass{

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
    
    public function listCentros($id){
        $this->OpenConnect();

        $sql="select usuario.idUsuario, centro.Nombre, centro.img, centro.idCentro FROM usuario INNER JOIN administra ON administra.Cod_usuario=usuario.idUsuario 
        INNER JOIN centro ON centro.idCentro=administra.Cod_centro WHERE usuario.idUsuario=$id";

        $result= $this->link->query($sql);

        $list=array();
       
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            
            $centro = new centroModel();
            $centro->setName($row['Nombre']);
            $centro->setImg($row['img']);
            $centro->setIdCentro($row['idCentro']);

            array_push($list, get_object_vars($centro));
            
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

