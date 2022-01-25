<?php
include_once 'connect_data.php';
include_once 'administraClass.php';

class administraModel extends administraClass{

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
    

    public function asignarcentro(){
        $this->OpenConnect();

        $sql="insert INTO administra(Cod_centro, Cod_usuario) VALUES ($this->Codcentro,$this->Codusuario)";

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

