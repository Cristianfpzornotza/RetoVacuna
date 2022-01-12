<?php

class municipioClass{

   protected $idMunicipio;
   protected $name;
   protected $codCentro;


   public function getIdMunicipio()
   {
      return $this->idMunicipio;
   }

   public function setIdMunicipio($idMunicipio)
   {
      $this->idMunicipio = $idMunicipio;

      return $this;
   }

   public function getName()
   {
      return $this->name;
   }

   public function setName($name)
   {
      $this->name = $name;

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
   
}