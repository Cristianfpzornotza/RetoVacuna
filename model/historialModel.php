<?php
include_once 'connect_data.php';
include_once 'historialClass.php';
include_once 'pacientesModel.php';

class historialModel extends historialClass{

    private $link;
    private $objPaciente;

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
        
        $sql = "SELECT historial.Fecha,historial.Tipo,historial.Numero_dosis,pacientes.Nombre,pacientes.Apellidos
        FROM historial
        INNER JOIN pacientes
        ON historial.Cod_paciente = pacientes.`idPaciente`
        WHERE pacientes.idPaciente='$paciente'";
        

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            // echo $row['Numero_dosis'];

            $historial = new historialModel();

            $historial->fecha=$row['Fecha'];
            $historial->tipo=$row['Tipo'];
            $historial->numeroDosis=$row['Numero_dosis'];

            

            $paciente = new pacientesModel();

            $paciente->nombre=$row['Nombre'];
            $paciente->apellidos=$row['Apellidos'];

            $historial->objPaciente=$paciente->ObjVars();

            array_push($list, get_object_vars($historial));
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

