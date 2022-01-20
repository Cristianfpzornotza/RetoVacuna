/*  VARIABLES GLOBALES
*****************************************/

var miApp=angular.module('miApp',[]);
var idAdmin=0;


/*  FUNCIONES
*****************************************/

    miApp.controller('micontrolador',['$scope','$http', function($scope,$http){

        $scope.vercentros="si";
        $scope.vercitas="no";
        
        document.getElementById("btnlogout").addEventListener("click",logout);

        $http.post('../../controller/cLoggedVerify.php').then(function (response) { 
            idAdmin=response.data.idUser;

            
            
            console.log(response.data);

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

            console.log(item);

            idCentro=item.idCentro;

            console.log(idCentro);

            $http.post('../../controller/cGetPacientes.php',idCentro).then(function (response) { 
                
                $scope.listapacientes=response.data.datos;
        
            });

            $scope.loadtabla();

            document.getElementById("btnnew").style.opacity = "0";
            document.getElementById("btnnew").disabled=true;

            document.getElementById("volver").addEventListener("click",function(){
                document.getElementById("btnnew").style.opacity = "1";
                document.getElementById("btnnew").disabled=false;
            });

        }

        $scope.loadtabla=function(){
            console.log("huola");
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





