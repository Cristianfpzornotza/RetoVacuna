<?php
include_once 'connect_data.php';
include_once 'citasClass.php';

class citasModel extends citasClass{

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

    public function insertarCita(){

        $this->OpenConnect();
        $fecha=$this->fecha;
        $codPaciente=$this->codPaciente;
        $codVacuna=$this->codVacuna;
        $codCentro=$this->codCentro;
        $codAnulacion=$this->codAnulacion;

        $sql="INSERT INTO citas (Fecha, Cod_paciente, Cod_vacuna, Cod_centro, Cod_anulacion) VALUES ('$fecha',$codPaciente,$codVacuna, $codCentro,$codAnulacion)";

        $this->link->query($sql);

        if($this->link->affected_rows==1){
            return "bien";
        } else{
            return $this->link->error;
        };

        

        
        
        $this->CloseConnect();
    
       

    }



    
    public function listCitas(){
        $this->OpenConnect();

        $sql="SELECT * FROM citas ";

        $result= $this->link->query($sql);

        $list=array();
       
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            
            $cita = new citasModel();
            $cita->setIdCitas($row['idCitas']);
            $cita->setFecha($row['Fecha']);
            $cita->setCodPaciente($row['Cod_paciente']);
            $cita->setCodVacuna($row['Cod_vacuna']);
            $cita->setCodCentro($row['Cod_centro']);
            $cita->setCodAnulacion($row['Cod_anulacion']);
           
            array_push($list, get_object_vars($cita));
            
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

