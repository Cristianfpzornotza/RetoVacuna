<?php

class diasClass{

   protected $idDias;
   protected $name;


   public function getIdDias()
   {
      return $this->idDias;
   }

   public function setIdDias($idDias)
   {
      $this->idDias = $idDias;

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
   
}