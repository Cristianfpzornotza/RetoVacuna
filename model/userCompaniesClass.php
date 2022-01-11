<?php


class userCompaniesClass {
 
    protected $id;
    protected $idUser;
    protected $idCompany;
    
    
    function getId() {
        return $this->id;
    }

    function getIdUser() {
        return $this->idUser;
    }

    function getIdCompany() {
        return $this->idCompany;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setIdUser($idUser) {
        $this->idUser = $idUser;
    }

    function setIdCompany($idCompany) {
        $this->idCompany = $idCompany;
    }


}
