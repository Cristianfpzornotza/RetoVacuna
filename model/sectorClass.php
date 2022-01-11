<?php

class sectorClass {
    protected $idSector;
    protected $name;
    protected $euro;
    
    function getIdSector() {
        return $this->idSector;
    }

    function getName() {
        return $this->name;
    }

    function getEuro() {
        return $this->euro;
    }

    function setIdSector($idSector) {
        $this->idSector = $idSector;
    }

    function setName($name) {
        $this->name = $name;
    }

    function setEuro($euro) {
        $this->euro = $euro;
    }



    
    
}
