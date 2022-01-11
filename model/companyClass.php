<?php

class companyClass {
   protected $idCompany;
   protected $name;
   protected $tel;
   protected $web;
   protected $address;
   protected $idSector;
   protected $logo;
   
   function getIdCompany() {
       return $this->idCompany;
   }

   function getName() {
       return $this->name;
   }

   function getTel() {
       return $this->tel;
   }

   function getAddress() {
       return $this->address;
   }

   function getIdSector() {
       return $this->idSector;
   }

   function getLogo() {
       return $this->logo;
   }

   function setIdCompany($idCompany) {
       $this->idCompany = $idCompany;
   }

   function setName($name) {
       $this->name = $name;
   }

   function setTel($tel) {
       $this->tel = $tel;
   }

   function setAddress($address) {
       $this->address = $address;
   }

   function setIdSector($idSector) {
       $this->idSector = $idSector;
   }

   function setLogo($logo) {
       $this->logo = $logo;
   }   
   function getWeb() {
       return $this->web;
   }

   function setWeb($web) {
       $this->web = $web;
   }


   
}
