<?php

class datosCoviClass{

    protected $id_provincia;
    protected $id_mes;
    protected $positivos;
    protected $fallecidos;

    public function getPositivos()
    {
        return $this->positivos;
    }

    
    public function setPositivos($positivos)
    {
        $this->positivos = $positivos;

        return $this;
    }

    
    public function getFallecidos()
    {
        return $this->fallecidos;
    }

     
    public function setFallecidos($fallecidos)
    {
        $this->fallecidos = $fallecidos;

        return $this;
    }

     
    public function getId_mes()
    {
        return $this->id_mes;
    }

    
     
    public function setId_mes($id_mes)
    {
        $this->id_mes = $id_mes;

        return $this;
    }

     
    public function getId_provincia()
    {
        return $this->id_provincia;
    }

    
    public function setId_provincia($id_provincia)
    {
        $this->id_provincia = $id_provincia;

        return $this;
    }

    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }

    
}