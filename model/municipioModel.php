<?php
include_once 'connect_data.php';
include_once 'municipioClass.php';

class municipioModel extends municipioClass{

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

    public function asignarcentro($paciente) {
        $this->OpenConnect();

        $idMunicipio=$this->idMunicipio;
        
        $sql = "SELECT centro.Nombre, centro.idCentro FROM `pacientes` 
        INNER JOIN municipio ON municipio.idMunicipio=pacientes.Cod_municipio
        INNER JOIN centro ON centro.idCentro=municipio.Cod_centro
        WHERE pacientes.idPaciente=$paciente and municipio.idMunicipio=$idMunicipio;";
        

        $result = $this->link->query($sql);

        $list = array();
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            // echo $row['Numero_dosis'];

            $municipio = new municipioModel();
            $municipio->setIdMunicipio($row['idCentro']);
            $municipio->setName($row['Nombre']);


            array_push($list, get_object_vars($municipio));
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

