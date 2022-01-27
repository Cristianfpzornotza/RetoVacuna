<?php
include_once 'connect_data.php';
include_once 'pacientesClass.php';

class pacientesModel extends pacientesClass{

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

    public function findPaciente() // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
        
        $sql="select * from pacientes where TIS=$this->TIS and Apellidos='$this->apellido' and Fecha_nac='$this->fechaNac'";
               
        $result= $this->link->query($sql);
        $list=array();
       
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $new=new pacientesModel();
            $new->setIdPaciente($row['idPaciente']);
            $new->setName($row['Nombre']);
            $new->setFechaNac($row['Fecha_nac']);
            $new->setCodMunicipio($row['Cod_municipio']);

            $this->idPaciente=$row['idPaciente'];
            $this->codMunicipio=$row['Cod_municipio'];


            array_push($list, get_object_vars($new));
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

    public function insertarpaciente() // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
        
        $sql="insert INTO `pacientes`(`TIS`, `Nombre`, `Apellidos`, `Fecha_nac`, `Cod_municipio`, `DNI`, `img`) 
        VALUES ($this->TIS,'$this->name','$this->apellido','$this->fechaNac',$this->codMunicipio,'$this->DNI','$this->img')";
               
        $result= $this->link->query($sql);


        $this->CloseConnect();
        return $result;
    }
   
    public function ObjVars()
    {
        return get_object_vars($this);
    }

}

