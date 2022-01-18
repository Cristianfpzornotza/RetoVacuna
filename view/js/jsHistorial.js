var MyApp = angular.module('miApp', []);
MyApp.controller('miControlador',['$scope','$http', function($scope,$http){
    
    $scope.ver='no';
    $scope.ver2='si';
    $scope.nombre='';
    $scope.apellidos='';
    $scope.lista=[];

    $scope.Historial=function(){
                        
        $scope.ver2='no';
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
}    




}]);