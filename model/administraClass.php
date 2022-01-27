<?php

class administraClass{

   protected $Codcentro;
   protected $Codusuario;


   public function getCodcentro()
   {
      return $this->Codcentro;
   }


   public function setCodcentro($Codcentro)
   {
      $this->Codcentro = $Codcentro;

      return $this;
   }

   public function getCodusuario()
   {
      return $this->Codusuario;
   }

   public function setCodusuario($Codusuario)
   {
      $this->Codusuario = $Codusuario;

      return $this;
   }
}