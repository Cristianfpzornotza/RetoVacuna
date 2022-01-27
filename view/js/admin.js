/*  VARIABLES GLOBALES
*****************************************/

var miApp=angular.module('miApp',[]);
var idAdmin=0;
var filename="";


/*  FUNCIONES
*****************************************/

    miApp.controller('micontrolador',['$scope','$http', function($scope,$http){


        $scope.vercentros="si";
        $scope.vercitas="no";
        $scope.vercitas2="no";
        $scope.verpaciente="no";
        $scope.verboton="no";
        $scope.verboton2="no";
        $scope.verboton3="no";
        $scope.verinterfaz="si";
        $scope.agregarmunicipio="si";

        $scope.admingeneral="no";
        $scope.admincentro="no";
        
        document.getElementById("btnlogout").addEventListener("click",logout);
        document.getElementById("btnlogout2").addEventListener("click",logout);
        document.getElementById("centroimg").addEventListener("change", setFileName);
        document.getElementById("centroimg2").addEventListener("change", setFileName);
        document.getElementById("centroimg3").addEventListener("change", setFileName2);

        $http.get('../../controller/cLoadAdmin.php').then(function (response) { 
            $scope.listaadmin = response.data.admin;
            console.log($scope.listaadmin);
        });

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

        $http.get('../../controller/cLoadMunicipios.php').then(function (response) { 
            $scope.listamunicipios = response.data.municipios;
            console.log($scope.listamunicipios);

            //var newRow="";

            /*for (let i = 0; i < listamunicipios.length; i++) {
                
                newRow+="<option value="+listamunicipios[i].idMunicipio+" data-centro="+listamunicipios[i].codCentro+">"+listamunicipios[i].name+"</option>";
                
            }
            */
        

        });


        

        ////////////////////////////////////   LO   MIO    ///////////////////////////////////////////////////


        $scope.confirmar=function(item){
            console.log(item);
           
            idpaciente=item.codPaciente;


            var idcitadelete = item.idCitas;
            var fechacitadelete = item.fecha;
            var ndcitadelete = item.numero_dosis;
            var vccitadelete = item.codVacuna;

            console.log(idcitadelete);
            console.log(fechacitadelete);
            console.log(ndcitadelete);
            console.log(vccitadelete);


            $http.post('../../controller/cConfirmar.php',{'idpaciente': idpaciente, 'id':idcitadelete, 'fecha':fechacitadelete, 'nd':ndcitadelete, 'vc':vccitadelete}).then(function(response){

                $http.post('../../controller/cLoadCitas.php',idpaciente).then(function (response) { 
                    $scope.listacitas = response.data.citas;
    
                    console.log($scope.listacitas);
                });


                $http.post('../../controller/cHistorialById.php',idpaciente).then(function (response) { 
                    $scope.listahistorial = response.data.datos;
    
                    console.log($scope.listahistorial);
                });

            });            
        }
            




        ////////////////////////////////////   LO   MIO    ///////////////////////////////////////////////////


        $scope.vistas=function(item){

            $scope.vercentros="no";
            $scope.vercitas="si";
            $scope.vercitas2="si";
            $scope.verboton="si";
            $scope.verboton2="no";
            $scope.verboton3="si";
            $scope.verpaciente="no";

            console.log(item);

            $scope.hospital=item;

            idCentro=item.idCentro;

            console.log(idCentro);

            $http.post('../../controller/cGetPacientes.php',idCentro).then(function (response) { 
                
                $scope.listapacientes=response.data.datos;
        
            });



        }

        $scope.editarcentro=function(){

            centroupdate = {

                idCentro : $scope.hospital.idCentro,
                nombreCentro : document.getElementById("nombrecentro").value,
                imgCentro : filename

            };

            console.log(centroupdate);

            $http.post('../../controller/cUpdateCentro.php',centroupdate).then(function (response) { 
                
                $scope.listapacientes=response.data.datos;

                window.location.href="prueba.html";
        
            });

        }

        $scope.volverpaciente=function(){
            $scope.vercentros="no";
            $scope.verinterfaz="si";
            $scope.vercitas="si";
            $scope.vercitas2="no";
            $scope.verboton="si";
            $scope.verboton2="no";
            $scope.verbotonpaciente="no";
            $scope.verpaciente="no";

            document.getElementById("imagenCentro").setAttribute("src","/view/img/placeholder.png");

        }

        $scope.volver=function(){

            $scope.verinterfaz="no";
            $scope.vercentros="si";
            $scope.vercitas="no";
            $scope.vercitas2="no";
            $scope.verboton="no";
            $scope.verboton2="si";
            $scope.verboton3="no";
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

            console.log(item);

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

            $http.post('../../controller/cHistorialById.php',idpaciente).then(function (response) { 
                $scope.listahistorial = response.data.datos;

                console.log($scope.listahistorial);
            });
            
        }

        $scope.mostrarmas=function(){

            $scope.municipionuevo="si";
            $scope.agregarmunicipio="no";
            $scope.agregarmunicipio2="si";

        }

        $scope.mostrarmas2=function(){

            $scope.municipionuevo2="si";
            $scope.agregarmunicipio2="no";

        }

        $scope.asignarcentro=function(){

            asignarusuarioid=document.getElementById("selectUsuario").value;
            asignarcentroid=document.getElementById("selectCentro").value;


            datosasignar = {

                asignarusuarioid : document.getElementById("selectUsuario").value,
                asignarcentroid : document.getElementById("selectCentro").value

            }

            console.log(datosasignar);


            $http.post('../../controller/cAsignarCentro.php',datosasignar).then(function (response) { 
                
                window.location.href="prueba.html";
            });

        }

        $scope.insertaradmin=function(){

            datosadmin = {

                nombre : $scope.adminnombre,
                contraseña : $scope.adminpassword

            };

            console.log(datosadmin);

            $http.post('../../controller/cInsertarAdmin.php',datosadmin).then(function (response) { 
                

                window.location.href="prueba.html";
            });


        }

        $scope.insertarpaciente=function(){

            datospaciente = { 
                nombrepaciente : $scope.nombrepaciente,
                apellidopaciente : $scope.apellidopaciente,
                dnipaciente : $scope.dnipaciente,
                municipiopaciente : $scope.municipiopaciente,
                fechapaciente : document.getElementById("fechanacimiento").value,
                imgpaciente : filename

            };

            console.log(datospaciente);

            $http.post('../../controller/cInsertarPaciente.php',datospaciente).then(function (response) { 
                $scope.pacienteinsert = response.data.error;

                console.log($scope.pacienteinsert);

                window.location.href="prueba.html";
            });

        }

        $scope.insertarcentro=function(){


            if($scope.municipio1==undefined){

                $scope.municipio1="vacio";

            }
            
            if ($scope.municipio2==undefined){

                $scope.municipio2="vacio";

            }

            if ($scope.municipio3==undefined){

                $scope.municipio3="vacio";

            }

            datoscentro = { 
                nombrecentro : $scope.nombrecentro,
                municipio1 : $scope.municipio1,
                municipio2 : $scope.municipio2,
                municipio3 : $scope.municipio3,
                imgcentro : filename };

                console.log(datoscentro);

            $http.post('../../controller/cInsertarCentro.php',datoscentro).then(function (response) { 
                $scope.centroinsert = response.data.error;

                console.log($scope.centroinsert);

                window.location.href="prueba.html";
            });

        }


    }]);

    function setFileName(){

        var file   = this.files[0];
        
        var reader  = new FileReader();
        filename = file.name;
        filesize= file.size;
        console.log(filename);
        
        if (!new RegExp("(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$").test(filename)) {
                  
          alert("Solo se aceptan imÃ¡genes JPG, PNG y GIF");
          document.getElementById("fitx").value="";
          document.getElementById("btnExecInsert").disabled=true;
          
        } else{
        
            reader.onloadend = function () {
                savedFileBase64 = reader.result;     // Almacenar en variable global para uso posterior	  
                
                document.getElementById("imagenCentro").setAttribute("src",savedFileBase64);
                document.getElementById("imagenCentro2").setAttribute("src",savedFileBase64);  

            }
      
            if (file) {
              reader.readAsDataURL(file);
              
            } else {
                document.getElementById("imagenPostre").setAttribute("src",'');
            }
        }
    
    }

    function setFileName2(){

        var file   = this.files[0];
        
        var reader  = new FileReader();
        filename = file.name;
        filesize= file.size;
        console.log(filename);
        
        if (!new RegExp("(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$").test(filename)) {
                  
          alert("Solo se aceptan imÃ¡genes JPG, PNG y GIF");
          document.getElementById("fitx").value="";
          document.getElementById("btnExecInsert").disabled=true;
          
        } else{
        
            reader.onloadend = function () {
                savedFileBase64 = reader.result;     // Almacenar en variable global para uso posterior	  
                
                document.getElementById("imagenCentro3").setAttribute("src",savedFileBase64);

            }
      
            if (file) {
              reader.readAsDataURL(file);
              
            } else {
                document.getElementById("imagenPostre").setAttribute("src",'');
            }
        }
    
    }


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





