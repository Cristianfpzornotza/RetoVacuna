var MyApp = angular.module('miApp', []);
MyApp.controller('miControlador',['$scope','$http', function($scope,$http){
    
    $scope.ver='no';
    $scope.nombre='';
    $scope.apellidos='';
    $scope.lista=[];

    $scope.Historial=function(){
                        
        $http.get('../controller/cConsultarHistorial.php').then(function (response) { 
                $scope.lista = response.data.list;
                console.log($scope.lista);
                $scope.ver='si';
                // console.log($scope.ver);

                
            $scope.nombre = $scope.lista[0].objPaciente.nombre;
            $scope.apellidos = $scope.lista[0].objPaciente.apellidos;
            console.log($scope.nombre);
            console.log($scope.apellidos);
        });   

        

        // for (let i = 0; i < $scope.lista.length; i++) {
            
            
        //     if ($scope.lista[i].seleccionado==true) {
        //         console.log("d")
        //         $scope.nombre=$scope.lista[0].objPaciente.nombre;
        //         $scope.apellidos=$scope.lista[0].objPaciente.apellidos;
        //     }
        // }
}    


}]);
    


// document.getElementById("btnradio2").addEventListener("click", function() {
    
    
//     loadHistorial();
    
//   });



function loadHistorial(){	

    var tabla ='<h2 id="historialpaciente">Nombre completo del paciente</h2>'
    +'<table class="table" id="tablahistorial">'
    +'<thead>'
      +'<tr>'
      +'<th scope="col">Numero</th>'
      +  '<th scope="col">Descripcion</th>'
       + '<th scope="col">Vacuna</th>'
      +  '<th scope="col">Fecha</th>'
      +  '</tr>'
     + '</thead>'
    +'<tbody>'
    +'<tr>'
    +    '<th scope="row">1</th>'
    +    '<td>Mark</td>'
    +    '<td>Otto</td>'
    +    '<td>@mdo</td>'
    +    '</tr>'
    +  '<tr>'
    +  '<th scope="row">2</th>'
    +    '<td>Jacob</td>'
    +    '<td>Thornton</td>'
    +    '<td>@fat</td>'
    +    '</tr>'
    +  ' <tr>'
    +  '<th scope="row">3</th>'
    +    '<td colspan="2">Larry the Bird</td>'
    +    '<td>@twitter</td>'
    +    '</tr>'
    +  '</tbody'
    +'</table>'

    document.getElementById("insertaraqui").innerHTML = tabla; 
	
	var url = "../controller/cConsultarHistorial.php";

	fetch(url, {
	  method: 'GET', // or 'POST'
	})
	.then(res => res.json()).then(result => {
		
			console.log('Success:', result.list);
			
			// document.getElementById("insertaraqui").innerHTML = '<h2 id="historialpaciente">'+result.list+'</h2>'
			
			// var companies = result.list;

       		// var newRow ="<div class='d-flex flex-wrap'>";
  			
			// for (let i = 0; i < companies.length; i++) 
			// {				
			// 	newRow += "<div class='col-2 m-5'>\
			// 					<a href='"+companies[i].objCompany.web+"' ><img class='img-fluid img-thumbnail' src='../uploads/"+companies[i].objCompany.logo+"'></a>\
			// 				</div>";	
			// }
       		// newRow +="</div>";   
       		// document.getElementById("companies").innerHTML = newRow; 
	})
	.catch(error => console.error('Error status:', error));	
};