var MyApp = angular.module('miApp', []);
MyApp.controller('miControlador',['$scope','$http', function($scope,$http){
    
	
	$scope.ver='si';
    $scope.ver2='no';
    $scope.nombre='';
    $scope.apellidos='';
    $scope.lista=[];

	$http.get('../controller/cConsultarHistorial.php').then(function (response) { 
		$scope.lista = response.data.list;
		console.log($scope.lista);
		$scope.ver='si';
		$scope.ver2='no';
		// console.log($scope.ver);

		
	$scope.nombre = $scope.lista[0].objPaciente.nombre;
	$scope.apellidos = $scope.lista[0].objPaciente.apellidos;
	console.log($scope.nombre);
	console.log($scope.apellidos);
});   
	

    $scope.Historial=function(){
                        
        $http.get('../controller/cConsultarHistorial.php').then(function (response) { 
                $scope.lista = response.data.list;
                console.log($scope.lista);
                $scope.ver='si';
				$scope.ver2='no';
                // console.log($scope.ver);

                
            $scope.nombre = $scope.lista[0].objPaciente.nombre;
            $scope.apellidos = $scope.lista[0].objPaciente.apellidos;
            console.log($scope.nombre);
            console.log($scope.apellidos);
        });   
}   
$scope.Citas=function(){
          
	$scope.ver='no';
    $scope.ver2='si';
	 
}     

$scope.verdias='no';
	$scope.verhoras='no';

$scope.Horas=function(){
      alert("ffd");
	$scope.verdias='no';
	$scope.verhoras='si';

    console.log(event.target.id);
    dia=event.target.id;
    idpaciente="1" //<%= Session["UserName"] %>

    var dato = {
        dia: dia,
        idpaciente: idpaciente
        };

    $http.post('../controller/cConsultaHoras.php',JSON.stringify(dato)).then(function (response) { 
        
        var horario= response.data.list;
        console.log(horario[0].horaApertura);

        apertura=horario[0].horaApertura.split(":");
        // apertura= parseInt(apertura[0]=apertura[0])+2
        cierre=horario[0].horaCierre.split(":");
        console.log(apertura);
        console.log(cierre);

        horainicio=parseInt(apertura[0]=apertura[0])+":"+apertura[1]
        horafinal=parseInt(apertura[0]=apertura[0])+2+":"+apertura[1]
        console.log(horainicio);
        console.log(horario);


        a=parseInt(apertura[0]);

        c=parseInt(cierre[0]);
        

        console.log(a);
        console.log(c);

        var horas=[];

        horas[0]=a;
        var cont=1;

        a=a+1;

        for (a; a<c; a++) {
            
            a=a+1;
            console.log(a);
            horas[cont]=a;
            
            cont=cont+1;

            

            
        }

        a=a-1;

        console.log(a);
        console.log(c);

        if (a==c) {
            
        }else{
           horas[cont]=c; 
        }
        

        console.log(horas);

        var newrow="";
        var newrow2="";
        for (let i = 0; i < horas.length; i++) {

            console.log(i);

            if (!horas[i+1]) {
                newrow+='<li class="nav-item" role="presentation">'
                +'<button class="nav-link active btnhorascita" data-start="'+horas[i]+'" id="a'+(horas[i])+":"+(apertura[1])+'-tab" data-bs-toggle="tab" data-bs-target="#a'+(horas[i])+":"+(apertura[1])+'" type="button" role="tab" aria-controls="a'+(horas[i])+":"+(apertura[1])+'" aria-selected="true">'+(horas[i])+":"+(apertura[1])+'</button>'
                +'</li>'
            }else{

                newrow+='<li class="nav-item" role="presentation">'
                    +'<button class="nav-link active btnhorascita" data-start="'+horas[i]+'" data-end="'+horas[i+1]+'" id="a'+(horas[i])+":"+(apertura[1])+'-tab" data-bs-toggle="tab" data-bs-target="#a'+(horas[i])+":"+(apertura[1])+'" type="button" role="tab" aria-controls="a'+(horas[i])+":"+(apertura[1])+'" aria-selected="true">'+(horas[i])+":"+(apertura[1])+'-'+(horas[i+1])+":"+(cierre[1])+'</button>'
                +'</li>'

            }





            i=i+1;

            newrow2+='<div class="tab-pane fade show active" id="'+(horas[i-1])+'" role="tabpanel" aria-labelledby="a'+(horas[i-1])+":"+(apertura[1])+'-tab">'
            +'<div class="horasdiv">'
              +''+(horas[i-1])+":"+(apertura[1])+' <button type="button" class="btn btn-success">Success</button>'
            +'</div>'
          +'</div>'
            
        }

        console.log(newrow);
        document.getElementById("myTab").innerHTML=newrow;
        document.getElementById("myTabContent").innerHTML=newrow2;

        contenido=document.querySelectorAll("#myTabContent .fade");
        //console.log(contenido);

        botonescitas=document.querySelectorAll("#myTab li button");
        console.log(botonescitas);
        botonescitas.forEach(element => {
            
            console.log(element);

            element.addEventListener("click", function () {
                

                contenido.forEach(element2 => {

                    console.log(element.dataset.start);
                    console.log(element2.id);
                    
                    if (element.dataset.start==element2.id) {
                        element2.style.display="block";
                    }else{
                        element2.style.display="none";
                    }

                });
                
                variable="a"+element.dataset.start;
                console.log(variable);

            });

            
            
        });
});
	
}   
$scope.Volver=function(){
      
	$scope.verdias='si';
	$scope.verhoras='no';
	
}   
$scope.BTNCita=function(){
      console.log("fedgyi")
	$scope.verdias='si';
	
}   




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