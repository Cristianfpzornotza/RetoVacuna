<?php

class citasClass{

    protected $idCitas;
    protected $fecha;
    protected $codPaciente;
    protected $codVacuna;
    protected $codCentro;
    protected $codAnulacion;
    protected $numero_dosis;


    public function getIdCitas()
    {
        return $this->idCitas;
    }

    public function setIdCitas($idCitas)
    {
        $this->idCitas = $idCitas;

        return $this;
    }

    public function getFecha()
    {
        return $this->fecha;
    }

    public function setFecha($fecha)
    {
        $this->fecha = $fecha;

        return $this;
    }

    public function getCodPaciente()
    {
        return $this->codPaciente;
    }

    public function setCodPaciente($codPaciente)
    {
        $this->codPaciente = $codPaciente;

        return $this;
    }

    public function getCodVacuna()
    {
        return $this->codVacuna;
    }

    public function setCodVacuna($codVacuna)
    {
        $this->codVacuna = $codVacuna;

        return $this;
    }
 
    public function getCodCentro()
    {
        return $this->codCentro;
    }

    public function setCodCentro($codCentro)
    {
        $this->codCentro = $codCentro;

        return $this;
    }

    public function getCodAnulacion()
    {
        return $this->codAnulacion;
    }

    public function setCodAnulacion($codAnulacion)
    {
        $this->codAnulacion = $codAnulacion;

        return $this;
    }

    public function getNumero_dosis()
    {
        return $this->numero_dosis;
    }

    
    public function setNumero_dosis($numero_dosis)
    {
        $this->numero_dosis = $numero_dosis;

        return $this;
    }
}