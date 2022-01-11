<?php
include_once '../model/connect_data.php';
include_once '../model/userCompaniesClass.php';
include_once '../model/companyModel.php';
include_once '../model/sectorModel.php';

class userCompaniesModel extends userCompaniesClass{
    
   private $link;
   private $objCompany;
    
    
   public function OpenConnect()
    {
    $konDat=new connect_data();
    try
    {
         $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
    }
    catch(Exception $e)
    {
    echo $e->getMessage();
    }
        $this->link->set_charset("utf8"); 
    }                   
 
    public function CloseConnect()
     {
     //mysqli_close ($this->link);
     $this->link->close();
    }
  
    public function InsertCompanyInUserList()
    {
         $this->OpenConnect();
         $sql="call spInsertCompanyInUserList($this->idUser,$this->idCompany)";
         $this->link->query($sql);
         $this->CloseConnect();
    }
 
    public function setUserCompaniesList() 
    {
        $this->OpenConnect();
        $idUser=$this->idUser;
        
        $sql="SELECT userCompanies.id,user.idUser,user.username,company.idCompany,company.name,company.web,company.logo,company.idSector,sector.name as secName
              FROM userCompanies
              INNER JOIN company ON userCompanies.idCompany=company.idCompany
              INNER JOIN user ON userCompanies.idUser=user.idUser
              INNER JOIN sector on company.idSector=sector.idSector
              WHERE user.idUser=$idUser";
        
        
        $result= $this->link->query($sql);
        $list=array();
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $userCompany=new userCompaniesModel();
            $userCompany->id=$row['id'];
            
            $company=new companyModel();
            $company->setIdCompany($row['idCompany']);
            $company->setName($row['name']);
            $company->setWeb($row['web']);
            $company->setLogo($row['logo']);
            
            $sector=new sectorModel();
            $sector->setIdSector($row['idSector']);
            $sector->setName($row['secName']);
            
            $company->setObjSector($sector->ObjVars());
            
            $userCompany->objCompany=$company->ObjVars();

            array_push($list, get_object_vars($userCompany));
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        
        return $list;
    }
    public function ObjVars()
    {
        return get_object_vars($this);
    }
    
}
