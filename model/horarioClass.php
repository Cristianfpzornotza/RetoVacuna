<?php

class horarioClass{

   protected $codDia;
   protected $codCentro;
   protected $horaApertura;
   protected $horaCierre;


   public function getCodDia()
   {
      return $this->codDia;
   }

   public function setCodDia($codDia)
   {
      $this->codDia = $codDia;

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
 
   public function getHoraApertura()
   {
      return $this->horaApertura;
   }

   public function setHoraApertura($horaApertura)
   {
      $this->horaApertura = $horaApertura;

      return $this;
   }
 
   public function getHoraCierre()
   {
      return $this->horaCierre;
   }

   public function setHoraCierre($horaCierre)
   {
      $this->horaCierre = $horaCierre;

      return $this;
   }

}