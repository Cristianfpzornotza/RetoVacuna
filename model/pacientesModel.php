<?php
include_once 'connect_data.php';
include_once 'pacientesClass.php';
include_once 'municipioModel.php';

class pacientesModel extends pacientesClass{

    private $link;
    private $ObjMunicipio;

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
            $new->setFechaPos($row['Fecha_pos']);
            $new->setImg($row['img']);

            $this->idPaciente=$row['idPaciente'];
            $this->codMunicipio=$row['Cod_municipio'];
            $this->fechaPos=$row['Fecha_pos'];
            $this->img=$row['img'];

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
        
        $sql="insert INTO `pacientes`(`TIS`, `Nombre`, `Apellidos`, `Apellidos2` , `Fecha_nac`, `Cod_municipio`, `DNI`, `img`) 
        VALUES ($this->TIS,'$this->name','$this->apellido','$this->apellido2','$this->fechaNac',$this->codMunicipio,'$this->DNI','$this->img')";
               
        $result= $this->link->query($sql);


        $this->CloseConnect();
        return $result;
    }


    public function updateMunicipioPaciente($municipio) // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
        
        $sql="select * from municipio where Nombre='$municipio'";

        $result= $this->link->query($sql);

        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){

            $idMunicipio=$row['idMunicipio'];

            $sql="UPDATE pacientes SET Cod_municipio='$idMunicipio' WHERE idPaciente=$this->idPaciente";
               
            $result= $this->link->query($sql);
        }

        $this->CloseConnect();
        return $result;
    }


    public function updatefoto() // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
        
        $sql="UPDATE pacientes SET img='$this->img' WHERE idPaciente=$this->idPaciente";
               
        $result= $this->link->query($sql);


        $this->CloseConnect();
        return $result;
    }

    public function updatepositivo() // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
        
        $sql="UPDATE pacientes SET Fecha_pos='$this->fechaPos' WHERE idPaciente=$this->idPaciente";
               
        $result= $this->link->query($sql);


        $this->CloseConnect();
        return $result;
    }
   

    public function pacienteById() // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
        

        
        $sql="select pacientes.* , municipio.Nombre AS Municipio FROM `pacientes` 
        INNER JOIN municipio ON municipio.idMunicipio=pacientes.Cod_municipio WHERE pacientes.idPaciente=$this->idPaciente";
               
        $result= $this->link->query($sql);
        $list=array();
       
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $new=new pacientesModel();
            $new->setTIS($row['TIS']);
            $new->setName($row['Nombre']);
            $new->setApellido($row['Apellidos']);
            $new->setApellido2($row['Apellidos2']);
            $new->setFechaNac($row['Fecha_nac']);
            $new->setFechaPos($row['Fecha_pos']);
            $new->setDNI($row['DNI']);
            $new->setImg($row['img']);
            
            $municipio = new municipioModel();
            $municipio->setIdMunicipio($row['Cod_municipio']);
            $municipio->setName($row['Municipio']);
            $new->ObjMunicipio=$municipio->ObjVars();

            array_push($list, get_object_vars($new));
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

