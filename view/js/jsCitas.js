document.addEventListener("DOMContentLoaded", function (event) {

	document.getElementById("logout").addEventListener('click', logout);
    
    const fecha = new Date();
    document.getElementById("start").setAttribute("min", fecha.getUTCFullYear()+"-"+fecha.getUTCMonth()+1+"-"+fecha.getUTCDate());
});




function logout(){
	
	var url = "../../controller/cLogout.php";
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
	.then(res => res.json()).then(result => {
	
		console.log(result.error);
		
		window.location.href="../../index.html";
	})
	.catch(error => console.error('Error status:', error));		
}

var MyApp = angular.module('miApp', []);
MyApp.controller('miControlador',['$scope','$http', function($scope,$http){
    
    var paciente;
	
	$scope.ver="si";
    $scope.verdos="no";
    $scope.verDias="no";
    $scope.verHoras="no";
    $scope.verCitas="no";
    $scope.boton="no";
    $scope.nombre='';
    $scope.apellidos='';
    $scope.lista=[];
    $scope.condiciones=[];

    $scope.paciente="";
    var idPaciente=""

    $http.get('../controller/cLoggedVerifyPaciente.php').then(function (response) { 
		$scope.paciente = response.data.paciente;
		console.log(response.data);
        idPaciente=$scope.paciente.idPaciente
        console.log(idPaciente);

        paciente = {
            idpaciente : idPaciente
        };

        $scope.consultarh(paciente);

    });   

	// $http.get('../controller/cConsultarHistorial.php',JSON.stringify(paciente)).then(function (response) { 
	// 	$scope.lista = response.data.list;
	// 	console.log($scope.lista);
	
        
	// 	// console.log($scope.ver);

		
    //     $scope.nombre = $scope.lista[0].objPaciente.nombre;
    //     $scope.apellidos = $scope.lista[0].objPaciente.apellidos;
    //     console.log($scope.nombre);
    //     console.log($scope.apellidos);
    // });   


    $scope.consultarh=function (paciente) {

        console.log(paciente);
        $http.post('../controller/cConsultarHistorial.php',JSON.stringify(paciente)).then(function (response) { 
            $scope.lista = response.data.list;
            console.log($scope.lista);
        
            
            // console.log($scope.ver);
    
            
            $scope.nombre = $scope.lista[0].objPaciente.nombre;
            $scope.apellidos = $scope.lista[0].objPaciente.apellidos;
            console.log($scope.nombre);
            console.log($scope.apellidos);
        });   
    }
	

    $scope.Historial=function(){
        $scope.ver="si";
        $scope.verdos="no";
        $scope.verDias="no";
        $scope.verHoras="no";
        $scope.verCitas="no";

        $scope.consultarh(paciente);
       

        // $http.get('../controller/cConsultarHistorial.php',JSON.stringify(paciente)).then(function (response) { 
        //         $scope.lista = response.data.list;
        //         console.log($scope.lista);

        //         // console.log($scope.ver);

                
        //     $scope.nombre = $scope.lista[0].objPaciente.nombre;
        //     $scope.apellidos = $scope.lista[0].objPaciente.apellidos;
        //     console.log($scope.nombre);
        //     console.log($scope.apellidos);
        // });   
    }   

$scope.Citas=function(){
    $scope.ver="no";
    $scope.verdos="si";
    

	 
}    

$scope.BTNCita=function(){
 $scope.verDias="si";


 
}
 $scope.escogerhora=function(){
    $scope.boton="si";

   
   }  

//    citapaciente = {
//     // Fecha : Fecha,
//     // Cod_paciente : Cod_paciente,
//     // Cod_vacuna : Cod_vacuna,
//     // Cod_centro : Cod_centro,
//     // Cod_anulacion : Cod_anulacion
// };

   $scope.cogerCita=function(){

    $http.get('../controller/cConsultarCondiciones.php').then(function (response) { 
        $scope.condiciones = response.data.list;
        console.log($scope.condiciones[0]);


        if (edad>11) {
            
            numerodedosis=$scope.condiciones[0].DosisDesde11;
        } else{
            
            numerodedosis=$scope.condiciones[0].DosisHasta11;
        }

        console.log(numerodedosis);
        console.log($scope.lista[0].numeroDosis);
        var e = new Date()
        var ultimadosis2="";
        for (let i = 0; i < $scope.lista.length; i++) {
            
            console.log($scope.lista[i].fecha);
            // var e = new Date()
            // ultimadosis=e.setMonth(e.getMonth() + 6)
            // console.log(ultimadosis);

            ultimadosis2=$scope.lista[i].fecha;

        }

        var ultimadosis3=ultimadosis2.split(" ");
        var ultimadosis3fecha=ultimadosis3[0].split("-");
        var ultimadosis3horas=ultimadosis3[1].split(":");
        ultimadosis=new Date(ultimadosis3fecha[0],ultimadosis3fecha[1],ultimadosis3fecha[2],ultimadosis3horas[0],ultimadosis3horas[1],ultimadosis3horas[2])
        console.log(ultimadosis);
        console.log(e);
        if (numerodedosis<=$scope.lista[0].numeroDosis) {
            alert("No puedes pedir mas citas porque tienes el nemro maximo de dosis");

        } 
        else if (ultimadosis.getTime()+2629800000>e.getTime()) {
            alert("No han pasado seis meses desde tu ultima dosis");
        }    
        else{
            

            var seleccionado=document.querySelectorAll("li input");
    console.log(seleccionado)

    
    var select="";
    
    for (let i = 0; i < seleccionado.length; i++) {
        
        if (seleccionado[i].checked==true) {
           select= seleccionado[i];
        }
        
    }
    console.log(select.value)

    alert("SE HA PEDIDO LA CITA CORRECTAMENTE")

    var celdas3= document.querySelectorAll("li input");

    for ( let i = 0; i < celdas3.length; i++) {
        if(celdas3[i].checked==true){
            
            celdas3[i].parentNode.style.backgroundColor = "red";
            celdas3[i].disabled = true;
        }
        
        
    }

    console.log(document.getElementById("start").value)

    Cod_vacuna=Math.ceil(Math.random() * (4 - 1) + 1);
    // console.log(Cod_vacuna);

    console.log($scope.paciente.codMunicipio);
    asignarcentro={
        idPaciente : idPaciente,
        Cod_municipio : $scope.paciente.codMunicipio,
    }

    $http.post('../controller/cAsignarCentro.php',JSON.stringify(asignarcentro)).then(function (response) { 
        $scope.municipio = response.data.list;
        console.log($scope.municipio[0].idMunicipio);

        
        citapaciente = {
        Fecha : document.getElementById("start").value+" "+select.value+":00.000000",
        //2022-01-20 14:19:44.000000
        Cod_paciente : idPaciente,
        Cod_vacuna : Cod_vacuna,
        Cod_centro : $scope.municipio[0].idMunicipio,
        Cod_anulacion : Math.random() * (1000000 - 1) + 1
    };
        


    $http.post('../controller/cInsertarCita.php',JSON.stringify(citapaciente)).then(function (response) { 
       
        console.log(response.data);
    
        
        
    }); 
        
    });  

    

    var hola=$scope.paciente.fechaNac
    
    var prueba2=hola.split("-");


    var Hoy = new Date();
    var nacimiento = new Date(prueba2[0],parseInt(prueba2[1])-1,prueba2[2]);
    console.log(nacimiento);
    console.log(Hoy.getTime())
    console.log(nacimiento.getTime())


    var edad = Hoy.getFullYear() - nacimiento.getFullYear();
    var m = Hoy.getMonth() - nacimiento.getMonth();

    if (m < 0 || (m === 0 && Hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    console.log(edad);

    var numerodedosis=""

            
        }

    });

    

    
    
       
   }  
$scope.Volver=function(){
      
	
	
}   

    var dias = ["1", "2", "3", "4", "5", "6", "7"];
    var x = document.getElementById("start");
    var dia="";
$scope.hours=function(){
    alert("change")
    $scope.verHoras="si";
    var celdas2= document.querySelectorAll("li input");

    for ( let i = 0; i < celdas2.length; i++) {
        celdas2[i].parentNode.style.backgroundColor = "white";
        celdas2[i].disabled = false;
        
    }
          
        if(dias[x.valueAsDate.getDay()-1]==undefined){
            alert("Día: " + dias[6]);
            dia=dias[x.valueAsDate.getDay()+1];
        }
	 else{
        alert("Día: " + dias[x.valueAsDate.getDay()-1]);
         dia=dias[x.valueAsDate.getDay()-1];
     }

console.log(dia)
     var dato = {
        dia: dia,
        idpaciente: idPaciente
        };
        console.log(dato);
    
    $http.post('../controller/cConsultaHoras.php',JSON.stringify(dato)).then(function (response) { 
            

        var horario= response.data.list;
                console.log(response.data.list[0].horaCierre)

                var prueba=horario[0].horaApertura.split(":");
                var pruebacierre=horario[0].horaCierre.split(":");


                var time = new Date();
                    var hour = time.setHours(prueba[0]);
                    var minute = time.setMinutes(prueba[1]);
                    var second = time.setSeconds(prueba[2]);
                    var temp = '' + ((hour > 12) ? hour - 12 : hour);
                    if (hour == 0)
                    temp = '12';
                    temp += ((minute < 10) ? ':0' : ':') + minute;
                    temp += ((second < 10) ? ':0' : ':') + second;
                    temp += (hour >= 12) ? ' P.M.' : ' A.M.';
                    

                    
                    console.log(pruebacierre[0]);
                    console.log(prueba[0]);
                    numerio=(pruebacierre[0]-prueba[0])*4
                    $scope.horasminutos=[];
                    $scope.horasminutos[0]=time.getHours()+":"+time.getMinutes();


                for (let i=1; i < parseInt(numerio)+1; i++) {
                    //console.log(i)
                    //console.log(numerio)
                    minutoSumar = 15;

                    time.setTime(time.getTime() + (minutoSumar*60*1000));  // minutos * seg * milisegundos

                    //function JSClock() {
                    
                    //console.log(time.getHours()+":"+time.getMinutes());

                    $scope.horasminutos[i]=time.getHours()+":"+time.getMinutes();

                    
                    
                    
                //}
                }
                console.log($scope.horasminutos);
        

                
          
        
               /* var horario= response.data.list;
                console.log(horario)
                // console.log(horario[0].horaApertura+ "--" +horario[0].horaCierre);

                
        a=parseInt(horario[0].horaApertura);
        c=parseInt(horario[0].horaCierre);
        
        console.log(a);
        console.log(c);

     

        var horasminutos=[];/////ARRAY HORAS Y MINUTOS QUINCE EN QUINCE

        horasminutos[0]=horario[0].horaApertura; ///8:55  horasminutos[1]= 9:10

        var variable=horario[0].horaApertura.split(":"); ///SEPARAMOS LAS HORAS Y MINUTOS DE APERTURA
        
        var variable2=horario[0].horaCierre.split(":"); ///SEPARAMOS LAS HORAS Y MINUTOS DE CIERRE
        parseInt(variable)
        parseInt(variable2)

        var cont=1;
        var cont2=0;
        parseInt(cont);
        parseInt(cont2);

        console.log(variable);
        console.log(variable2);

        variable[0]

        console.log(variable[0]+"---"+variable[1])/////APERTURA
        console.log(variable2[0]+"---"+variable2[1])/////CIERRE
                    // if (a==c) {
                        
                    // }else{
                    // horasminutos[cont]=c; 
                    // }
        
////////////////////8; 8<15; 8++////////////////////////7
        console.log(horasminutos)
var citas=[];
parseInt(citas)

        for (variable[0]; variable[0]<variable2[0]; variable[0]++) {
            citas[cont2]=variable[0]
            cont2=cont2+1
            citas[cont2]=parseInt(variable[1])+15;
            variable[1]=parseInt(variable[1])+15
            console.log(citas[cont2])
            if (variable[1]>60) {
                console.log("if"+variable[1])
                citas[cont2]=parseInt(citas[1])-60;
                console.log(citas[cont2])
                cont2=cont2-1;
                citas[cont2]=parseInt(citas[cont2])+1;
                console.log(variable[1])
                variable[1]=parseInt(variable[1])-60
                horasminutos[cont]=citas[cont2]+":"+parseInt(variable[1])
            } 
            else{
                cont2=cont2-1
                // citas[cont2]=parseInt(citas[1])-60;
                console.log()
                horasminutos[cont]=citas[cont2]+":"+parseInt(variable[1])
                cont2=cont2+1
            }
            cont=cont+1;
        }
        console.log(horasminutos);*/

               
        //         for (variable[0]; variable[0]<variable2[0]; variable[0]++) {

        //             // console.log(empiezaminuto);
        //             minutos=parseInt(variable[1])+15;

        //             console.log(minutos)
                    
        //             var hora=parseInt(variable[0]);

        //             if (minutos>60) {
        //                 console.log("minutos mayor que 60 "+minutos)
        //                 var resta=minutos-60;
        //                 horasminutos[cont]=a+":"+resta;
        //                 console.log("minutos mas quince"+resta)
        //                 cont=cont+1;
        //                 // b=b+1
        //             }else{
                        
        //             }
        //             horasminutos[0]=variable[0]+":"+variable[1];
        //             a=a+1;
        //             console.log(a);
        //             // horasminutos[cont]=a+":"+c;
                   
        //             cont=cont+1
                    
        //         }
        // console.log(horasminutos)
        $http.get('../controller/cRecogerCitas.php').then(function (response) { 
            ListaCitas = response.data.list;
               console.log(ListaCitas);
               var espacio=[];
              
            for (let z = 0; z < ListaCitas.length; z++) {
             
                espacio=ListaCitas[z].fecha.split(" ");
            
         


// console.log(espacio)
// console.log(espacio)

               var celdas= document.querySelectorAll("li input");
               var input=document.getElementById("start").value;
            //    console.log(celdas)
            //    console.log(input)
               
            for (let i = 0; i < celdas.length; i++) {

                if (espacio[0] == input) {


                    // console.log("if1")
                    // console.log(espacio[1])
                    var cero = [];
                    
                    cero=celdas[i].value.split(":");
                    // console.log(cero)

                    if ( cero[0] < 10) {

                        // console.log("ifmedio")
                        // celdas[i].value = "0" + celdas[i].value;
                        prue="";
                        prue="0" + celdas[i].value

                        // console.log( prue + ":00")

                        if (espacio[1] == prue + ":00") {
                            // console.log("if2")
                            // console.log(celdas[i])
                            celdas[i].parentNode.style.backgroundColor = "red";
                            celdas[i].disabled = true;
                            //    alert("COLOR ROJO")
                        }
                    }


                    console.log( prue + ":00")

                    if (espacio[1] == celdas[i].value + ":00") {
                        // console.log("if2")
                        // console.log(celdas[i])
                        celdas[i].parentNode.style.backgroundColor = "red";
                        celdas[i].disabled = true;
                        //    alert("COLOR ROJO")
                    }
                    
                }
            }

        }
        
       
       })



    
    });
 
}   




$scope.Horas=function(){
      alert("ffd");
}


}]);

