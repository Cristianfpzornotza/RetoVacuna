var miApp=angular.module('miApp',[]);
paciente=0;


miApp.controller('micontrolador',['$scope','$http', function($scope,$http){
	
	document.getElementById("btnlogout").addEventListener('click', logout);



	$http.get('../../controller/cLoggedVerifyPaciente.php').then(function (response) { 

		console.log(response);

		idpaciente = response.data.idPaciente;

		
		
	    if (response.data.error == "Sesión iniciada")
	    {

			$http.post('../../controller/cPacienteById.php',idpaciente).then(function (response) { 

				$scope.paciente=response.data.datos[0];

				if($scope.paciente.img == null){
					document.getElementById("imgperfil").src="../view/img/placeholder.png";
				}else{
					document.getElementById("imgperfil").src="../view/img/"+$scope.paciente.img;
				}

				console.log($scope.paciente);
		
			});


			$http.post('../../controller/cHistorialById.php',idpaciente).then(function (response){
				console.log(response.data.datos);

				$scope.arrhistorial = response.data.datos;

				console.log(response.data.datos2);
				$scope.arrcitas = response.data.datos2;
			})

			$scope.borrarcita=function(){
			
				$scope.cod = $scope.codigoanulacion;
				alert($scope.cod);
				
				$http.post('../../controller/cDeleteCita.php',$scope.cod).then(function (response){
					console.log(response.data.error);

					$http.post('../../controller/cHistorialById.php',idpaciente).then(function (response){
						console.log(response.data.datos);
		
						$scope.arrhistorial = response.data.datos;
		
						console.log(response.data.datos2);
						$scope.arrcitas = response.data.datos2;
					})
				})
			}

            
	    } else {
			window.location.href = "login.html";
	    }

	});


}]);






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





/*
function loggedVerify(){
	var url = "../../controller/cLoggedVerifyPaciente.php";

	fetch(url, {
	  method: 'GET',  
	})
	.then(res => res.json()).then(result => {
       		
		console.log(result);

		paciente = result.idPaciente;
		
	    if (result.error == "Sesión iniciada")
	    {
            
	    } else {
			window.location.href = "login.html";
	    }
	})
	.catch(error => console.error('Error status:', error));
}

*/