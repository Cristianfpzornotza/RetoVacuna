<?php

class pacientesClass{

   protected $idPaciente;
   protected $TIS;
   protected $fechaPos;
   protected $name;
   protected $apellido;
   protected $apellido2;
   protected $fechaNac;
   protected $codMunicipio;
   protected $DNI;
   protected $img;

   public function getIdPaciente()
   {
      return $this->idPaciente;
   }

   public function setIdPaciente($idPaciente)
   {
      $this->idPaciente = $idPaciente;

      return $this;
   }

   public function getTIS()
   {
      return $this->TIS;
   }

   public function setTIS($TIS)
   {
      $this->TIS = $TIS;

      return $this;
   }

   public function getFechaPos()
   {
      return $this->fechaPos;
   }

   public function setFechaPos($fechaPos)
   {
      $this->fechaPos = $fechaPos;

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

   public function getApellido()
   {
      return $this->apellido;
   }

   public function setApellido($apellido)
   {
      $this->apellido = $apellido;

      return $this;
   }

   public function getFechaNac()
   {
      return $this->fechaNac;
   }

   public function setFechaNac($fechaNac)
   {
      $this->fechaNac = $fechaNac;

      return $this;
   }

   public function getCodMunicipio()
   {
      return $this->codMunicipio;
   }

   public function setCodMunicipio($codMunicipio)
   {
      $this->codMunicipio = $codMunicipio;

      return $this;
   }

   public function getDNI()
   {
      return $this->DNI;
   }

   public function setDNI($DNI)
   {
      $this->DNI = $DNI;

      return $this;
   }
   

   
   public function getApellido2()
   {
      return $this->apellido2;
   }

   
   public function setApellido2($apellido2)
   {
      $this->apellido2 = $apellido2;

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