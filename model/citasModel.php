<?php
include_once 'connect_data.php';
include_once 'citasClass.php';
include_once 'vacunaModel.php';

class citasModel extends citasClass{

    private $link;
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

    public function loadcitasbypaciente(){
        $this->OpenConnect();

        $sql="select citas.* , vacuna.Nombre FROM citas INNER JOIN vacuna on citas.Cod_vacuna=vacuna.idVacuna WHERE Cod_paciente=$this->codPaciente";

        $result= $this->link->query($sql);

        $list=array();

        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {

            $citas = new citasModel();
            $citas->setIdCitas($row['idCitas']);
            $citas->setFecha($row['Fecha']);
            $citas->setCodPaciente($row['Cod_paciente']);
            $citas->setCodVacuna($row['Cod_vacuna']);
            $citas->setCodCentro($row['Cod_centro']);
            $citas->setCodAnulacion($row['Cod_anulacion']);


            $vacuna = new vacunaModel();
            $vacuna->setIdVacuna($row['Cod_vacuna']);
            $vacuna->setName($row['Nombre']);

            $citas->objVacuna=$vacuna->ObjVars();

            array_push($list, get_object_vars($citas));

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

