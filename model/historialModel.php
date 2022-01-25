<?php
include_once 'connect_data.php';
include_once 'historialClass.php';
include_once 'pacientesModel.php';
include_once 'vacunaModel.php';


class historialModel extends historialClass{

    private $link;
    private $objPaciente;
    private $objVacuna;

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

    // funcion para mostrar movimientos de la cuenta bancaria
    public function mostrar($paciente) {
        $this->OpenConnect();
        
        $sql = "SELECT historial.*, vacuna.Nombre AS vacuna, pacientes.*
        FROM pacientes
        INNER JOIN historial
        ON historial.Cod_paciente=pacientes.idPaciente
        INNER JOIN vacuna
        ON vacuna.idVacuna=historial.Cod_vacuna
        WHERE pacientes.idPaciente=$paciente";
        

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            // echo $row['Numero_dosis'];

            $historial = new historialModel();

            $historial->fecha=$row['Fecha'];
            $historial->numeroDosis=$row['Numero_dosis'];

            $vacuna = new vacunaModel();

            $vacuna->setName($row['vacuna']);

            $historial->objVacuna=$vacuna->ObjVars();            

            $paciente = new pacientesModel();

            $paciente->setName($row['Nombre']);
            $paciente->setApellido($row['Apellidos']);

            $historial->objPaciente=$paciente->ObjVars();

            array_push($list, get_object_vars($historial));
        }

        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }
   
    public function setHistorialById(){
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
        
        $sql="select historial.*, vacuna.Nombre FROM `historial` INNER JOIN vacuna ON vacuna.idVacuna=historial.Cod_vacuna WHERE historial.`Cod_paciente`=$this->codPaciente";
        
        $result= $this->link->query($sql);
        $list=array();
       
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {

            $history = new historialModel();
            $history->setFecha($row['Fecha']);
            //$history->setCodVacuna($row['Cod_vacuna']);
            $history->setNumeroDosis($row['Numero_dosis']);

            $vacuna = new vacunaModel();
            $vacuna->setName($row['Nombre']);
            
            $history->ObjVacuna=$vacuna->ObjVars();

            array_push($list, get_object_vars($history));
            
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

