<?php
include_once 'userClass.php';
include_once 'companyModel.php';
include_once 'sectorClass.php';


class userModel extends userClass{
    
    private $link;
    
    
    public function OpenConnect()
    {
    $konDat=new connect_data();
    try
    {
         $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
         // mysqli klaseko link objetua sortzen da dagokion konexio datuekin
         // se crea un nuevo objeto llamado link de la clase mysqli con los datos de conexión. 
    }
    catch(Exception $e)
    {
    echo $e->getMessage();
    }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta 
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }                   
 
    public function CloseConnect()
     {
     //mysqli_close ($this->link);
     $this->link->close();
 }
 
    public function findUser() // login, fill and return id of the user
    {
        $this->OpenConnect();
        //$sql="call spLoginEncripted('$this->username')";
       
        $idUser=-1;
        
        $sql="select * from user where username='$this->username'";
               
        $result= $this->link->query($sql);
       
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $this->idUser=$row['idUser'];
            $passwordEncripted=$row['password'];
            
            if (password_verify($this->password, $passwordEncripted))
            {
                $idUser=$this->idUser;
            }
        }
        
        $this->CloseConnect();
        return $idUser;
    }
    public function AdminVerify()
    {
        $this->OpenConnect();
        //$sql="call spAdminVerify('$this->idUser')";
        
        $sql="SELECT * FROM user WHERE user.idUser=$this->idUser AND user.admin=1";
        
        $result= $this->link->query($sql);
       
        $admin=0;
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $admin=1;
        }
        $this->CloseConnect();
        
        return $admin;
    }
          

    function signUp()
    {
         $this->OpenConnect();
         $sql="call spInsertUser('$this->name','$this->surname','$this->email','$this->username','$this->password')";
         $this->link->query($sql);
         $this->CloseConnect();
    }
    
    public function ObjVars()
    {
        return get_object_vars($this);
    }
}
