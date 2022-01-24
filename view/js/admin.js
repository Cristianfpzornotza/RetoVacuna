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

            
            
            console.log(response.data.error);

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

            $scope.listaordenado=[];

            console.log(item);

            var cont=1;

            for (let i = 0; i < $scope.listacentros.length; i++) {
                
                if(item.idCentro==$scope.listacentros[i].idCentro){
                    $scope.listaordenado[0]=$scope.listacentros[i];
                }else{
                    $scope.listaordenado[cont]=$scope.listacentros[i];
                    cont=cont+1;
                }
                
            }

            console.log($scope.listaordenado);

            var newRow="";

            newRow+="<select>";

            for (let i = 0; i < $scope.listaordenado.length; i++) {
                
                newRow+="<option value='"+$scope.listaordenado[i].idCentro+"'>"+$scope.listaordenado[i].name+"</option>";
                
            }

            newRow+="</select>";

            document.getElementById("combocentro").innerHTML=newRow;

            console.log("aaa");

            $scope.loadtabla();

        }

        $scope.loadtabla=function(){

            alert("huola");

            // $http.post('../../controller/cLoadTabla.php',idCentro).then(function (response) { 
            //     idAdmin=response.data.idUser;
                  
            //     console.log(response.data.error);
    
            // }); 

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





