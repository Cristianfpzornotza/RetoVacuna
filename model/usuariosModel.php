<?php
include_once 'connect_data.php';
include_once 'usuariosClass.php';

class usuariosModel extends usuariosClass{

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

    public function findUser() // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
       
        $idUser=-1;
        
        $sql="select * from usuario where Nombre='$this->name'";
               
        $result= $this->link->query($sql);
       
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->idUsuario=$row['idUsuario'];
            $passwordEncripted=$row['Contrasena'];
            
            if (password_verify($this->contrasena, $passwordEncripted))
            {
                $idUsuario=$this->idUsuario;
            }
        }
        
        $this->CloseConnect();
        return $idUsuario;
    }
   
    public function ObjVars()
    {
        return get_object_vars($this);
    }

}

