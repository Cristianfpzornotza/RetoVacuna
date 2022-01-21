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
		console.log($scope.paciente.idPaciente);
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

    var seleccionado=document.querySelectorAll("li input");
    var select="";
    
    for (let i = 0; i < seleccionado.length; i++) {
        
        if (seleccionado[i].checked==true) {
           select= seleccionado[i];
        }
        
    }
    console.log(select.value)

    alert("SE HA PEDIDO LA CITA CORRECTAMENTE")

    console.log(document.getElementById("start").value)

    Cod_vacuna=Math.random() * (5 - 1) + 1;
    console.log(Cod_vacuna);

    citapaciente = {
        Fecha : document.getElementById("start").value+" "+select.value+":00.000000",
        //2022-01-20 14:19:44.000000
        Cod_paciente : idPaciente,
        Cod_vacuna : Cod_vacuna,
        // Cod_centro : Cod_centro,
        // Cod_anulacion : Cod_anulacion
    };

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

        if (numerodedosis<=$scope.lista[0].numeroDosis) {
            alert("No puedes pedir mas citas porque tienes el nemro maximo de dosis")
        } else(
            alert("si")

            
        )

    });
    
       
   }  
$scope.Volver=function(){
      
	
	
}   

    var dias = ["1", "2", "3", "4", "5", "6", "7"];
    var x = document.getElementById("start");
    var dia="";
$scope.hours=function(){
    $scope.verHoras="si";
    
          
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
                    console.log(i)
                    console.log(numerio)
                    minutoSumar = 15;

                    time.setTime(time.getTime() + (minutoSumar*60*1000));  // minutos * seg * milisegundos

                    //function JSClock() {
                    
                    console.log(time.getHours()+":"+time.getMinutes());

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
            



    
    });
}   




$scope.Horas=function(){
      alert("ffd");
}



//     console.log(event.target.id);
//     dia=event.target.id;
//     idpaciente="1" //<%= Session["UserName"] %>

//     var dato = {
//         dia: dia,
//         idpaciente: idpaciente
//         };

//     $http.post('../controller/cConsultaHoras.php',JSON.stringify(dato)).then(function (response) { 
        
//         var horario= response.data.list;
//         console.log(horario[0].horaApertura);

//         apertura=horario[0].horaApertura.split(":");
//         // apertura= parseInt(apertura[0]=apertura[0])+2
//         cierre=horario[0].horaCierre.split(":");
//         console.log(apertura);
//         console.log(cierre);

//         // horainicio=parseInt(apertura[0]=apertura[0])+":"+apertura[1]
//         // horafinal=parseInt(apertura[0]=apertura[0])+2+":"+apertura[1]
//         // console.log(horainicio);
//         // console.log(horario);


//         a=parseInt(apertura[0]);

//         c=parseInt(cierre[0]);
        

//         console.log(a);
//         console.log(c);

//         var horas=[];

//         horas[0]=a;
//         var cont=1;

//         a=a+1;

//         for (a; a<c; a++) {
            
//             a=a+1;
//             console.log(a);
//             horas[cont]=a;
            
//             cont=cont+1;

            

            
//         }

//         a=a-1;

//         console.log(a);
//         console.log(c);

//         if (a==c) {
            
//         }else{
//            horas[cont]=c; 
//         }
        

//         console.log(horas);

//         var newrow="";
//         var newrow2="";
//         for (let i = 0; i < horas.length; i++) {

//             console.log(i);

//             if (!horas[i+1]) {
//                 newrow+='<li class="nav-item" role="presentation">'
//                 +'<button class="nav-link active btnhorascita" data-minutos="'+apertura[1]+'" data-start="'+horas[i]+'" id="a'+(horas[i])+":"+(apertura[1])+'-tab" data-bs-toggle="tab" data-bs-target="#a'+(horas[i])+":"+(apertura[1])+'" type="button" role="tab" aria-controls="a'+(horas[i])+":"+(apertura[1])+'" aria-selected="true">'+(horas[i])+":"+(apertura[1])+'</button>'
//                 +'</li>'
//             }else{

//                 newrow+='<li class="nav-item" role="presentation">'
//                     +'<button class="nav-link active btnhorascita" data-minutos="'+apertura[1]+'" data-start="'+horas[i]+'" data-end="'+horas[i+1]+'" id="a'+(horas[i])+":"+(apertura[1])+'-tab" data-bs-toggle="tab" data-bs-target="#a'+(horas[i])+":"+(apertura[1])+'" type="button" role="tab" aria-controls="a'+(horas[i])+":"+(apertura[1])+'" aria-selected="true">'+(horas[i])+":"+(apertura[1])+'-'+(horas[i+1])+":"+(cierre[1])+'</button>'
//                 +'</li>'

//             }





//             i=i+1;

//         console.log(newrow);
//         document.getElementById("myTab").innerHTML=newrow;
//         document.getElementById("myTabContent").innerHTML=newrow2;

//         contenido=document.querySelectorAll("#myTabContent .fade");
//         //console.log(contenido);

//         botonescitas=document.querySelectorAll("#myTab li button");
//         console.log(botonescitas);

//         empieza="";
//         termina="";
//         empiezaminuto="";
//         var b="";
//         var d="";
//         botonescitas.forEach(element => {
            
//             console.log(element);

//             element.addEventListener("click", function () {
                

//                 contenido.forEach(element2 => {

//                     console.log(element.dataset.start);
//                     console.log(element2.id);
                    
//                     if (element.dataset.start==element2.id) {
//                         element2.style.display="block";
//                         empieza=element.dataset.start
//                         termina=element.dataset.end
//                         empiezaminuto=element.dataset.minutos
//                         // console.log(element.dataset.start)
//                         // console.log(element.dataset.end)
//                     }else{
//                         element2.style.display="none";
//                     }

//                 });
                
//                 variable="a"+element.dataset.start;
//                 console.log(variable);


//                 var b=parseInt(empieza);

//                 var d=parseInt(termina);
//                 console.log(b);
//                 console.log(d);

//                 var horasminutos=[];

//                 horasminutos[0]=empiezaminuto;
//                 var cont=1;
        
//                 // b=b+1;
        
//                 for (b; b<d; b++) {
//                     console.log(empiezaminuto);
//                     empiezaminuto=parseInt(empiezaminuto)+15
//                     if (parseInt(empiezaminuto)>60) {
                        
//                         horasminutos[cont]=parseInt(empiezaminuto)-60;
                    
//                         cont=cont+1;
//                         // b=b+1
//                     }else{
                        
//                     }
//                     // b=b+1;
//                     // console.log(b);
//                     // horasminutos[cont]=b;
                    
//                     // cont=cont+1
                    
//                 }
        
//                 b=b-1;
//                 cont=cont-1
        
//                 console.log(b);
//                 console.log(d);
//                 console.log(horasminutos)
//                 if (b==d) {
                    
//                 }else{
//                     horasminutos[cont]=d; 
//                 }

//             });

            
            
//         });
        

//         // var horasminutos=[];

//         // horasminutos[0]=b;
//         // var cont=1;

//         // b=b+1;

//         // for (b; b<d; b++) {
            
//         //     b=b+1;
//         //     console.log(b);
//         //     horasminutos[cont]=b;
            
//         //     cont=cont+1;

            

            
//         // }

//         // b=b-1;

//         // console.log(b);
//         // console.log(d);
//         // console.log(horasminutos)
//         // if (b==d) {
            
//         // }else{
//         //     horasminutos[cont]=d; 
//         // }

//             newrow2+='<div class="tab-pane fade show active" id="'+(horas[i-1])+'" role="tabpanel" aria-labelledby="a'+(horas[i-1])+":"+(apertura[1])+'-tab">'
//             +'<div class="horasdiv">'
//               +''+(horas[i-1])+":"+(apertura[1])+' <button type="button" class="btn btn-success">Success</button>'
//             +'</div>'
//           +'</div>'
            
//         }
// });
	
// }   




}]);

// document.addEventListener("DOMContentLoaded", function (event) {
	
//     loadCitas();
// });

// function loadCitas(){	

//     var cita ='<button type="button" class="btn btn-primary">Perdir cita</button>'
    

//     document.getElementById("insertaraqui").innerHTML = cita; 
	
// 	// var url = "../controller/cHome.php";

// 	// fetch(url, {
// 	//   method: 'GET', // or 'POST'
// 	// })
// 	// .then(res => res.json()).then(result => {
		
// 	// 		console.log('Success:', result.list);
			
// 	// 		document.getElementById("username").innerHTML = "Hello, "+ result.username;
			
// 	// 		var companies = result.list;

//     //    		var newRow ="<div class='d-flex flex-wrap'>";
  			
// 	// 		for (let i = 0; i < companies.length; i++) 
// 	// 		{				
// 	// 			newRow += "<div class='col-2 m-5'>\
// 	// 							<a href='"+companies[i].objCompany.web+"' ><img class='img-fluid img-thumbnail' src='../uploads/"+companies[i].objCompany.logo+"'></a>\
// 	// 						</div>";	
// 	// 		}
//     //    		newRow +="</div>";   
//     //    		document.getElementById("companies").innerHTML = newRow; 
// 	// })
// 	// .catch(error => console.error('Error status:', error));	
// };

/*Calendario*/
// console.log(document.getElementsByClassName("btncambiar"));
// document.querySelectorAll(".btncambiar").addEventListener("change", function () {
// 	console.log("hola")
// 	app.init();
	
// })
// document.getElementById("btncambiarm").addEventListener("change", function () {
// 	console.log("hola")
// 	app.swap();
	
// document.getElementById("calender_1_month_select").addEventListener("change", function () {
// 	console.log("hola")
// 	app.swap();
	
	
// })

// var app = {
	
// 	settings: {
// 	  container: $('#calender_1'),
// 	  calendar: $('.calendar_body'),
// 	//   days: $('ul li a'),
// 	  days: $('.btncalendario'),
// 	  form: $('.back'),
// 	  input: $('.back input'),
// 	  buttons: $('.back button')
// 	},
  
// 	init: function() {
// 	  instance = this;
// 	  settings = this.settings;
// 	  this.bindUIActions();
// 	},
  
// 	swap: function(currentSide, desiredSide) {
// 	  settings.container.toggleClass('flip');
  
// 	  currentSide.fadeOut(900);
// 	  currentSide.hide();
// 	  desiredSide.show();
  
// 	},
  
// 	bindUIActions: function() {
// 	  settings.days.on('click', function(){
// 		  console.log(settings.days);
// 		instance.swap(settings.calendar, settings.form);
// 		settings.input.focus();
// 	  });
  
// 	  settings.buttons.on('click', function(){
// 		instance.swap(settings.form, settings.calendar);
// 	  });
// 	}
//   }
  
//   app.init();
  /*Calendario*/