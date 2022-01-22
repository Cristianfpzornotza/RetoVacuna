/*  VARIABLES GLOBALES
*****************************************/

var miApp=angular.module('miApp',[]);
var idAdmin=0;


/*  FUNCIONES
*****************************************/

    miApp.controller('micontrolador',['$scope','$http', function($scope,$http){

        $scope.vercentros="si";
        $scope.vercitas="no";
        $scope.verpaciente="no";
        $scope.verboton="no";
        $scope.verinterfaz="si";

        $scope.admingeneral="no";
        $scope.admincentro="no";
        
        document.getElementById("btnlogout").addEventListener("click",logout);
        document.getElementById("btnlogout2").addEventListener("click",logout);

        $http.post('../../controller/cLoggedVerify.php').then(function (response) { 
            idAdmin=response.data.idUser;

            
            
            console.log(response.data);

            if(response.data.categoria=="AdminGeneral"){
                $scope.admingeneral="si";
                $scope.vercentros="no";
                $scope.admincentro="no";
            }else{
                $scope.admingeneral="no";
                $scope.admincentro="si";
            }

            if (response.data.error == "Sesión iniciada")
            {
                if(location.pathname == "/index.html" || location.pathname=="/"){
                    window.location.href = "prueba.html"; 
                } 
            } else {
    
                if(location.pathname == "/prueba.html"){
                    window.location.href = "index.html"; 
                }
                
            }

        }); 


        $http.get('../../controller/cLoadCentros.php').then(function (response) { 
            $scope.listacentros = response.data.perro;
            console.log($scope.listacentros);
        });

        $scope.vistas=function(item){

            $scope.vercentros="no";
            $scope.vercitas="si";
            $scope.verboton="si";
            $scope.verpaciente="no";

            console.log(item);

            $scope.hospital=item;

            idCentro=item.idCentro;

            console.log(idCentro);

            $http.post('../../controller/cGetPacientes.php',idCentro).then(function (response) { 
                
                $scope.listapacientes=response.data.datos;
        
            });



        }

        $scope.volverpaciente=function(){
            $scope.vercentros="no";
            $scope.verinterfaz="si";
            $scope.vercitas="si";
            $scope.verboton="si";
            $scope.verboton2="si";
            $scope.verbotonpaciente="no";
            $scope.verpaciente="no";
        }

        $scope.volver=function(){

            $scope.verinterfaz="no";
            $scope.vercentros="si";
            $scope.vercitas="no";
            $scope.verboton="no";
            $scope.verboton2="si";
            $scope.verpaciente="no";

            $scope.hospital="";

        }

        $scope.pacientevistas=function(item){
            $scope.vercentros="no";
            $scope.vercitas="no";
            $scope.verboton="no";
            $scope.verbotonpaciente="si";
            $scope.verpaciente="si"; 

            $scope.objetoPaciente=item;

            idpaciente=item.objPaciente.idPaciente;

            if(item.objPaciente.fechaPos==null){
                document.getElementById("positivo").innerHTML="Fecha positivo: No ha dado positivo";
            }else{
                document.getElementById("positivo").innerHTML="Fecha positivo: "+$scope.objetoPaciente.objPaciente.fechaPos;
            }

            $http.post('../../controller/cLoadCitas.php',idpaciente).then(function (response) { 
                $scope.listacitas = response.data.citas;

                console.log($scope.listacitas);
            });
            
        }


    }]);

    function logout(){
        var url = "../../controller/cLogout.php";
    
        fetch(url, {
        method: 'GET',
        })
        .then(res => res.text()).then(result => {
    
            window.location.href=" index.html";
        })
        .catch(error => console.error('Error status:', error));
    }

    function loggedVerify(){

        var url = "../../controller/cLoggedVerify.php";
    
        fetch(url, {
            method: 'GET',  
        })
        .then(res => res.json()).then(result => {
                    
            console.log(result);

            idAdmin=result.idUser;
            
            if (result.error == "Sesión iniciada")
            {
                if(location.pathname == "/index.html" || location.pathname=="/"){
                    window.location.href = "prueba.html"; 
                } 
            } else {
    
                if(location.pathname == "/prueba.html"){
                    window.location.href = "index.html"; 
                }
                
            }
        })
        .catch(error => console.error('Error status:', error));	
    }





