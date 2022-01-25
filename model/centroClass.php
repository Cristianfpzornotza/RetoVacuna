<?php

class centroClass{

   protected $idCentro;
   protected $name;
   protected $img;
   

   public function getIdCentro()
   {
      return $this->idCentro;
   }

   public function setIdCentro($idCentro)
   {
      $this->idCentro = $idCentro;

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

   public function getImg()
   {
      return $this->img;
   }

   public function setImg($img)
   {
      $this->img = $img;

      return $this;
   }
}