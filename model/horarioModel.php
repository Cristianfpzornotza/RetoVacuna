<?php
include_once 'connect_data.php';
include_once 'horarioClass.php';

class horarioModel extends horarioClass{

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

    public function recogerHorario($idPaciente) {
        $this->OpenConnect();

       
        $dia=$this->codDia;
        
        $sql = "SELECT centro.Nombre,horario.Cod_dia,horario.Hora_apertura,horario.Hora_cierre FROM pacientes 
        INNER JOIN municipio
        ON pacientes.Cod_municipio = municipio.idMunicipio
        INNER JOIN centro
        ON municipio.Cod_centro = centro.idCentro
        INNER JOIN horario
        ON centro.idCentro = horario.Cod_centro
        INNER JOIN dias
        ON horario.Cod_dia = dias.idDias
        WHERE pacientes.idPaciente='$idPaciente'and horario.Cod_dia='$dia';";
        

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            // echo $row['Numero_dosis'];

            $horario = new horarioModel();

            $horario->codDia=$row['Cod_dia'];
            $horario->horaApertura=$row['Hora_apertura'];
            $horario->horaCierre=$row['Hora_cierre'];

            $centro = new centroModel();

            $centro->setName($row['Nombre']);

            $horario->objCentro=$centro->ObjVars();

            array_push($list, get_object_vars($horario));
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

