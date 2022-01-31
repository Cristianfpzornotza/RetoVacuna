<?php
include_once 'connect_data.php';
include_once 'centroClass.php';
include_once 'municipioModel.php';
include_once 'pacientesModel.php';

class centroModel extends centroClass{

    private $link;
    private $objPaciente;
    private $objMunicipio;

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

    public function insertarcentro(){
        $this->OpenConnect();

        $sql="insert INTO centro(Nombre, img) VALUES ('$this->name','$this->img')";

        $result= $this->link->query($sql);

        $idCentro=-1;
       
        $sql="select * from centro where Nombre='$this->name'";

        $result= $this->link->query($sql);

        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $idCentro=$row['idCentro'];
        }

        $this->CloseConnect();
        return $idCentro;
       

    }

    public function updatecentro(){
        $this->OpenConnect();

        $sql="update centro SET Nombre='$this->name',img='$this->img' WHERE idCentro=$this->idCentro";

        $result= $this->link->query($sql);

        
        $this->CloseConnect();
        return "no error";
       

    }

    public function findPacienteByCentro() // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
        
        $sql="SELECT pacientes.idPaciente, pacientes.TIS, pacientes.img, pacientes.Fecha_pos, pacientes.Nombre, pacientes.Apellidos, pacientes.Fecha_nac, pacientes.DNI, municipio.Nombre as municipio, centro.Nombre as centro FROM pacientes
        INNER JOIN municipio ON municipio.idMunicipio = pacientes.Cod_municipio
        INNER JOIN centro ON centro.idCentro=municipio.Cod_centro
        WHERE centro.idCentro=$this->idCentro";
               
        $result= $this->link->query($sql);
        $list=array();
       
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {

            $centro=new centroModel();
            $centro->setName($row['centro']);

            $new=new pacientesModel();
            $new->setIdPaciente($row['idPaciente']);
            $new->setTIS($row['TIS']);
            $new->setFechaPos($row['Fecha_pos']);
            $new->setName($row['Nombre']);
            $new->setApellido($row['Apellidos']);
            $new->setFechaNac($row['Fecha_nac']);
            $new->setDNI($row['DNI']);
            $new->setImg($row['img']);

            $municipio=new municipioModel();
            $municipio->setName($row['municipio']);

            $centro->objPaciente=$new->ObjVars();
            $centro->objMunicipio=$municipio->ObjVars();

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

