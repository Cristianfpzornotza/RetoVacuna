<?php

class historialClass{

   protected $idHistorial;
   protected $fecha;
   protected $codPaciente;
   protected $tipo;
   protected $numeroDosis;


   public function getIdHistorial()
   {
      return $this->idHistorial;
   }

   public function setIdHistorial($idHistorial)
   {
      $this->idHistorial = $idHistorial;

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

   public function getTipo()
   {
      return $this->tipo;
   }

   public function setTipo($tipo)
   {
      $this->tipo = $tipo;

      return $this;
   }

   public function getNumeroDosis()
   {
      return $this->numeroDosis;
   }

   public function setNumeroDosis($numeroDosis)
   {
      $this->numeroDosis = $numeroDosis;

      return $this;
   }

}