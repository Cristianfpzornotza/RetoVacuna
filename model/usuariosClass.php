<?php

class usuariosClass{

   protected $idUsuario;
   protected $name;
   protected $contrasena;

    
   public function getIdUsuario()
   {
      return $this->idUsuario;
   }

   public function setIdUsuario($idUsuario)
   {
      $this->idUsuario = $idUsuario;

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

   public function getContrasena()
   {
      return $this->contrasena;
   }

   public function setContrasena($contrasena)
   {
      $this->contrasena = $contrasena;

      return $this;
   }
   
}