<?php

class vacunaClass{

   protected $idVacuna;
   protected $name;
   protected $numero;


   public function getIdVacuna()
   {
      return $this->idVacuna;
   }

   public function setIdVacuna($idVacuna)
   {
      $this->idVacuna = $idVacuna;

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

   public function getNumero()
   {
      return $this->numero;
   }

   public function setNumero($numero)
   {
      $this->numero = $numero;

      return $this;
   }

}