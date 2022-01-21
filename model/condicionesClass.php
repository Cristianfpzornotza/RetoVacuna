<?php

class condicionesClass{

    protected $DosisHasta11;
    protected $DosisDesde11;
    protected $TiempoEntreDosis;

    



    /**
     * Get the value of DosisHasta11
     */ 
    public function getDosisHasta11()
    {
        return $this->DosisHasta11;
    }

    /**
     * Set the value of DosisHasta11
     *
     * @return  self
     */ 
    public function setDosisHasta11($DosisHasta11)
    {
        $this->DosisHasta11 = $DosisHasta11;

        return $this;
    }

    /**
     * Get the value of DosisDesde11
     */ 
    public function getDosisDesde11()
    {
        return $this->DosisDesde11;
    }

    /**
     * Set the value of DosisDesde11
     *
     * @return  self
     */ 
    public function setDosisDesde11($DosisDesde11)
    {
        $this->DosisDesde11 = $DosisDesde11;

        return $this;
    }

    /**
     * Get the value of TiempoEntreDosis
     */ 
    public function getTiempoEntreDosis()
    {
        return $this->TiempoEntreDosis;
    }

    /**
     * Set the value of TiempoEntreDosis
     *
     * @return  self
     */ 
    public function setTiempoEntreDosis($TiempoEntreDosis)
    {
        $this->TiempoEntreDosis = $TiempoEntreDosis;

        return $this;
    }
}