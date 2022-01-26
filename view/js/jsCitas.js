document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("logout").addEventListener('click', logout);

    const fecha = new Date();
    document.getElementById("start").setAttribute("min", fecha.getUTCFullYear() + "-" + fecha.getUTCMonth() + 1 + "-" + fecha.getUTCDate());

var radio=document.querySelectorAll("li input");
console.log(radio)
});

var FechaCita = "";
var citapaciente = [];
var citaslista = [];



///////////////////LOGOUT/////////////////////////////
function logout() {

    var url = "../../controller/cLogout.php";
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }  // input data
    })
        .then(res => res.json()).then(result => {

            console.log(result.error);

            window.location.href = "../../index.html";
        })
        .catch(error => console.error('Error status:', error));
}
///////////////////////////////////////////FIN LOGOUT//////////////////////////////////


//////////////////////////////////////ANGULAR/////////////////////////////////////////
var MyApp = angular.module('miApp', []);
MyApp.controller('miControlador', ['$scope', '$http', function ($scope, $http) {

    var paciente;

    $scope.ver = "si"; /////////////HISTORIAL VISIBLE///////
    $scope.verdos = "si";///////////////CITA/////////////////
    $scope.verDias = "si";////////////CALENDARIO///////////
    $scope.verHoras = "no";//////////INPUT Y HORAS/////////////////
    $scope.verCitas = "no";///////////////CITA PAGINA////////////////
    $scope.boton = "no";////////////BOTON PEDIR CITA///////////////
    $scope.nombre = '';
    $scope.apellidos = '';
    $scope.lista = [];
    $scope.condiciones = [];

    $scope.paciente = "";
    var idPaciente = ""
    ///////////////////////////LOGGED VERIFFY//////////////////////////////////////////////
    $http.get('../controller/cLoggedVerifyPaciente.php').then(function (response) {
        $scope.paciente = response.data.paciente;
        console.log(response.data);
        idPaciente = $scope.paciente.idPaciente
        console.log(idPaciente);

        paciente = {
            idpaciente: idPaciente
        };

        $scope.consultarh(paciente);

    });
    ////////////////////////////////FIN LOGGED VERIFY////////////////////////////////


    //////////////////////////BOTON VER HISTORIAL///////////////////
    $scope.Historial = function () {

        $scope.ver = "si";
        $scope.verdos = "no";
        $scope.verDias = "no";
        $scope.verHoras = "no";
        $scope.verCitas = "no";

        $scope.consultarh(paciente);
    }
    //////////////////////////FIN BOTON//////////////////////////

    /////////////////////////CONSULTAR HISTORIAL SELECT HISTORIAL DE CADA PACIENTE//////////////////
    $scope.consultarh = function (paciente) {

        console.log(paciente);
        $http.post('../controller/cConsultarHistorial.php', JSON.stringify(paciente)).then(function (response) {
            $scope.lista = response.data.list;
            console.log($scope.lista);

            console.log(response.data.listacitas);

            citaslista=response.data.listacitas;

            console.log($scope.lista.length);

            if ($scope.lista.length == 0) {

            } else {
                $scope.nombre = $scope.lista[0].objPaciente.nombre;
                $scope.apellidos = $scope.lista[0].objPaciente.apellidos;
                console.log($scope.nombre);
                console.log($scope.apellidos);
            }


        });
    }
    /////////////////////////FIN SELECT HISTORIAL DE CADA PACIENTE/////////////////////////////////////



    ////////////////////////BOTON DE CITAS PARA VER MAS BOTONES////////////////////
    $scope.Citas = function () {

        $scope.ver = "no";
        $scope.verdos = "si";

    }
    //////////////////////////////////FIN BOTON CITA////////////////////////////////////////

    //////////////////////////BOTON PEDIR CITA PARA VER CALENDARIO/////////////////////////////
    $scope.BTNCita = function () {

        $scope.verDias = "si";

    }
    /////////////////////////FIN BOTON BTNcita/////////////////////////////////////////////////

    ////////////////////////BOTON DEL CALENDARIO///////////////////////////////////////////////
    $scope.escogerhora = function () {

        $scope.boton = "si";

    }
    ////////////////////////FIN BOTON CALENDARIO///////////////////////////////////////////////
    //    citapaciente = {
    //     // Fecha : Fecha,
    //     // Cod_paciente : Cod_paciente,
    //     // Cod_vacuna : Cod_vacuna,
    //     // Cod_centro : Cod_centro,
    //     // Cod_anulacion : Cod_anulacion
    // };
    ///////////////////////BOTON PEDIR CITA//////////////////////////////////////////////////////
    $scope.cogerCita = function () {

        /////////FUNCION PARA LAS CONDICIONES DE VACUNACION///////////////////
        $http.get('../controller/cConsultarCondiciones.php').then(function (response) {
            $scope.condiciones = response.data.list;
            console.log($scope.condiciones[0]);


            if (edad > 11) {

                numerodedosis = $scope.condiciones[0].DosisDesde11;
            } else {

                numerodedosis = $scope.condiciones[0].DosisHasta11;
            }

            console.log(numerodedosis);
            // console.log($scope.lista[0].numeroDosis);
            var e = new Date()
            var ultimadosis2 = "";
            for (let i = 0; i < $scope.lista.length; i++) {

                console.log($scope.lista[i].fecha);
                // var e = new Date()
                // ultimadosis=e.setMonth(e.getMonth() + 6)
                // console.log(ultimadosis);

                ultimadosis2 = $scope.lista[i].fecha;

            }

            if ($scope.lista.length == 0) {

                var seleccionado = document.querySelectorAll("li input");
                console.log(seleccionado)

                var celdas3 = document.querySelectorAll("li input");

                for (let i = 0; i < celdas3.length; i++) {
                    if (celdas3[i].checked == true) {

                        celdas3[i].parentNode.style.backgroundColor = "red";
                        celdas3[i].disabled = true;
                    }


                }

                console.log(document.getElementById("start").value)

                var select = "";

                for (let i = 0; i < seleccionado.length; i++) {

                    if (seleccionado[i].checked == true) {
                        select = seleccionado[i];
                    }

                }
                console.log(select.value)

                alert("SE HA PEDIDO LA CITA CORRECTAMENTE")

                console.log(document.getElementById("start").value)

                Cod_vacuna = Math.ceil(Math.random() * (4 - 1) + 1);
                // console.log(Cod_vacuna);

                console.log($scope.paciente.codMunicipio);
                asignarcentro = {
                    idPaciente: idPaciente,
                    Cod_municipio: $scope.paciente.codMunicipio,
                }

                //////////////////ASIGNAR CENTRO DEPENDIENDO DEL MUNICIO DE CADA PACIENTE///////////////////
                $http.post('../controller/cAsignarCentro2.php', JSON.stringify(asignarcentro)).then(function (response) {
                    $scope.municipio = response.data.list;
                    console.log($scope.municipio[0].idMunicipio);


                    citapaciente = {
                        Fecha: document.getElementById("start").value + " " + select.value + ":00.000000",
                        //2022-01-20 14:19:44.000000
                        Cod_paciente: idPaciente,
                        Cod_vacuna: Cod_vacuna,
                        Cod_centro: $scope.municipio[0].idMunicipio,
                        Cod_anulacion: Math.random() * (1000000 - 1) + 1
                    };
                    /////////////INSERTAR CITA EN LA BASE DE DATOS//////////////////
                    $http.post('../controller/cInsertarCita.php', JSON.stringify(citapaciente)).then(function (response) {

                        console.log(response.data);

                        $scope.cita = response.data.list;
                        var fechahora = $scope.cita[0].fecha.split(" ");

                        console.log(fechahora);

                        newrow = "<div class='contenedorpadre'><div>SOLICITANTE:" + $scope.cita[0].objPaciente.name + "</div></div>"


                        newrow += "<div class='contenedorpadre'><div>Lugar:" + $scope.cita[0].objCentro.name + "</div><div>Cita:" + $scope.cita[0].objHistorial.numeroDosis + "</div><div>Dia:" + fechahora[0] + "</div><div>Hora:" + fechahora[1] + "</div><div>*Codigo de cita:" + $scope.cita[0].codAnulacion + "</div></div>"


                        document.getElementById("container").innerHTML = newrow;


                        // document.getElementById("container").innerHTML="<div>SOLICITANTE:"+$scope.cita.objPaciente.name+"</div><div class='contenedorpadre'><div>Lugar:"+$scope.cita.objCentro.name+"</div><div>Cita:"+$scope.cita.objHistorial.numeroDosis+"</div><div>Dia:"+$scope.cita.fecha+"</div><div>Hora:"+$scope.cita.fecha+"</div><div>*Codigo de cita:"+$scope.cita.codAnulacion+"</div></div>";

                        $scope.verCitas = "si";
                        $scope.ver = "no";
                        $scope.verdos = "no";


                        document.getElementById("logout").style.display = "none";
                        document.getElementById("btnprincipal").style.display = "none";



                    });
                    ////////////FIN INSERTAR CITA EN LA BASE DE DATOS////////////////
                });
                ////////////////////////////FIN ASIGNAR CENTRO//////////////////////////////



                var hola = $scope.paciente.fechaNac

                var prueba2 = hola.split("-");


                var Hoy = new Date();
                var nacimiento = new Date(prueba2[0], parseInt(prueba2[1]) - 1, prueba2[2]);
                console.log(nacimiento);
                console.log(Hoy.getTime())
                console.log(nacimiento.getTime())


                var edad = Hoy.getFullYear() - nacimiento.getFullYear();
                var m = Hoy.getMonth() - nacimiento.getMonth();

                if (m < 0 || (m === 0 && Hoy.getDate() < nacimiento.getDate())) {
                    edad--;
                }
                console.log(edad);

                var numerodedosis = ""

            } else {

                var ultimadosis3 = ultimadosis2.split(" ");
                var ultimadosis3fecha = ultimadosis3[0].split("-");
                var ultimadosis3horas = ultimadosis3[1].split(":");
                ultimadosis = new Date(ultimadosis3fecha[0], ultimadosis3fecha[1], ultimadosis3fecha[2], ultimadosis3horas[0], ultimadosis3horas[1], ultimadosis3horas[2]);
                console.log(ultimadosis);
                console.log(e);
                if (numerodedosis <= $scope.lista[0].numeroDosis) {
                    alert("No puedes pedir mas citas porque tienes el nemro maximo de dosis");

                }
                else if (ultimadosis.getTime() + 2629800000 > e.getTime()) {
                    alert("No han pasado seis meses desde tu ultima dosis");
                }
                else {



                    var seleccionado = document.querySelectorAll("li input");
                    console.log(seleccionado)

                    var celdas3 = document.querySelectorAll("li input");

                    for (let i = 0; i < celdas3.length; i++) {
                        if (celdas3[i].checked == true) {

                            celdas3[i].parentNode.style.backgroundColor = "red";
                            celdas3[i].disabled = true;
                        }


                    }

                    console.log(document.getElementById("start").value)

                    var select = "";

                    for (let i = 0; i < seleccionado.length; i++) {

                        if (seleccionado[i].checked == true) {
                            select = seleccionado[i];
                        }

                    }
                    console.log(select.value)

                    alert("SE HA PEDIDO LA CITA CORRECTAMENTE")

                    console.log(document.getElementById("start").value)

                    Cod_vacuna = Math.ceil(Math.random() * (4 - 1) + 1);
                    // console.log(Cod_vacuna);

                    console.log($scope.paciente.codMunicipio);
                    asignarcentro = {
                        idPaciente: idPaciente,
                        Cod_municipio: $scope.paciente.codMunicipio,
                    }

                    //////////////////ASIGNAR CENTRO DEPENDIENDO DEL MUNICIO DE CADA PACIENTE///////////////////
                    // $http.post('../controller/cAsignarCentro.php', JSON.stringify(asignarcentro)).then(function (response) {
                    //     $scope.municipio = response.data.list;
                    //     console.log($scope.municipio[0].idMunicipio);


                    //     FechaCita=document.getElementById("start").value + " " + select.value + ":00.000000";

                    //     console.log(FechaCita);

                    //     // citapaciente = {
                    //     //     Fecha: FechaCita,
                    //     //     //2022-01-20 14:19:44.000000
                    //     //     Cod_paciente: idPaciente,
                    //     //     Cod_vacuna: Cod_vacuna,
                    //     //     Cod_centro: $scope.municipio[0].idMunicipio,
                    //     //     Cod_anulacion: Math.random() * (1000000 - 1) + 1
                    //     // };


                    //     // /////////////INSERTAR CITA EN LA BASE DE DATOS//////////////////
                    //     // $http.post('../controller/cInsertarCita.php', JSON.stringify(citapaciente)).then(function (response) {

                    //     //     console.log(response.data);



                    //     // });
                    //     // ////////////FIN INSERTAR CITA EN LA BASE DE DATOS////////////////



                    // });
                    ////////////////////////////FIN ASIGNAR CENTRO//////////////////////////////

                    // citapaciente = {
                    //     Fecha: FechaCita,
                    //     //2022-01-20 14:19:44.000000
                    //     Cod_paciente: idPaciente,
                    //     Cod_vacuna: Cod_vacuna,
                    //     Cod_centro: $scope.municipio[0].idMunicipio,
                    //     Cod_anulacion: Math.random() * (1000000 - 1) + 1
                    // };

                    // /////////////INSERTAR CITA EN LA BASE DE DATOS//////////////////
                    // $http.post('../controller/cInsertarCita.php', JSON.stringify(citapaciente)).then(function (response) {

                    //     console.log(response.data);



                    // });
                    ////////////FIN INSERTAR CITA EN LA BASE DE DATOS////////////////



                    var hola = $scope.paciente.fechaNac

                    var prueba2 = hola.split("-");


                    var Hoy = new Date();
                    var nacimiento = new Date(prueba2[0], parseInt(prueba2[1]) - 1, prueba2[2]);
                    console.log(nacimiento);
                    console.log(Hoy.getTime())
                    console.log(nacimiento.getTime())


                    var edad = Hoy.getFullYear() - nacimiento.getFullYear();
                    var m = Hoy.getMonth() - nacimiento.getMonth();

                    if (m < 0 || (m === 0 && Hoy.getDate() < nacimiento.getDate())) {
                        edad--;
                    }
                    console.log(edad);

                    var numerodedosis = ""


                }

            }

            paciente = {
                idpaciente: idPaciente,
                Fecha: FechaCita

            };

            // $http.post('../controller/cVerCitas.php', paciente).then(function (response) {


            //     console.log(response.data);
            //     $scope.cita = response.data.list;
            //     console.log( $scope.cita);
            //     // if($scope.cita[0].length==0){
            //         // console.log($scope.cita.length);
            //         // newrow="<div>SOLICITANTE:"+$scope.cita.objPaciente.name+"</div>"
            //     // }else{
            //         // console.log($scope.cita[1].objPaciente.name);
            //     newrow="<div class='contenedorpadre'><div>SOLICITANTE:"+$scope.cita[0].objPaciente.name+"</div></div>"
            //     for (let i = 0; i < $scope.cita.length; i++) {

            //         newrow+="<div class='contenedorpadre'><div>Lugar:"+$scope.cita[i].objCentro.name+"</div><div>Cita:"+$scope.cita[i].objHistorial.numeroDosis+"</div><div>Dia:"+$scope.cita[i].fecha+"</div><div>Hora:"+$scope.cita[i].fecha+"</div><div>*Codigo de cita:"+$scope.cita[i].codAnulacion+"</div></div>"

            //     }
            //     document.getElementById("container").innerHTML=newrow;


            //     // document.getElementById("container").innerHTML="<div>SOLICITANTE:"+$scope.cita.objPaciente.name+"</div><div class='contenedorpadre'><div>Lugar:"+$scope.cita.objCentro.name+"</div><div>Cita:"+$scope.cita.objHistorial.numeroDosis+"</div><div>Dia:"+$scope.cita.fecha+"</div><div>Hora:"+$scope.cita.fecha+"</div><div>*Codigo de cita:"+$scope.cita.codAnulacion+"</div></div>";

            //     $scope.verCitas="si";
            //     $scope.ver = "no"; 
            //     $scope.verdos = "no";


            //     document.getElementById("logout").style.display="none";
            //     document.getElementById("btnprincipal").style.display="none";


            // });


        });
        //////////////////FIN CONDICIONES DE VACUNACION/////////////////////

    }
    ////////////////////BOTON VOLVER A LA PAGINA PRINCIPAL////////////////
    $scope.Volver = function () {


    }
    //////////////////////////FIN VOLVER////////////////////////////


    var dias = ["1", "2", "3", "4", "5", "6", "7"];
    var x = document.getElementById("start");
    var dia = "";

    /////////////BOTON CAMBIAR DE FECHA EN EL CALENDARIO////////////////////    
    $scope.hours = function () {
        alert("change");

        fechaelegida=document.getElementById("start").value;
        console.log(fechaelegida);


        $scope.verHoras = "si";
        var celdas2 = document.querySelectorAll("li input");

        for (let i = 0; i < celdas2.length; i++) {
            celdas2[i].parentNode.style.backgroundColor = "white";
            celdas2[i].disabled = false;

        }

        if (dias[x.valueAsDate.getDay() - 1] == undefined) {
            alert("Día: " + dias[6]);
            dia = dias[x.valueAsDate.getDay() + 1];
        }
        else {
            alert("Día: " + dias[x.valueAsDate.getDay() - 1]);
            dia = dias[x.valueAsDate.getDay() - 1];
        }

        console.log(dia)
        var dato = {
            dia: dia,
            idpaciente: idPaciente
        };
        console.log(dato);

        ////////////////////MOSTRAR HORAS SEGUN FECHA ESCOGIDA///////////////////////////////////////
        $http.post('../controller/cConsultaHoras.php', JSON.stringify(dato)).then(function (response) {


            var horario = response.data.list;
            console.log(response.data.list[0].horaCierre)

            var prueba = horario[0].horaApertura.split(":");
            var pruebacierre = horario[0].horaCierre.split(":");


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
            numerio = (pruebacierre[0] - prueba[0]) * 4
            $scope.horasminutos = [];
            $scope.horasminutos[0] = time.getHours() + ":" + time.getMinutes();


            for (let i = 1; i < parseInt(numerio) + 1; i++) {
                //console.log(i)
                //console.log(numerio)
                minutoSumar = 15;

                time.setTime(time.getTime() + (minutoSumar * 60 * 1000));  // minutos * seg * milisegundos

                //function JSClock() {

                //console.log(time.getHours()+":"+time.getMinutes());

                $scope.horasminutos[i] = time.getHours() + ":" + time.getMinutes();




                //}
            }
            console.log($scope.horasminutos);




            for (let i = 0; i < citaslista.length; i++) {
                
                separado=citaslista[i].fecha.split(" ");
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




































































                if(fechaelegida==separado[0]){

                    



                }
                
            }


            //////////FUNCION PARA SABER HORAS COGIDAS////////////////////////////
            $http.get('../controller/cRecogerCitas.php').then(function (response) {
                ListaCitas = response.data.list;
                console.log(ListaCitas);
                var espacio = [];

                for (let z = 0; z < ListaCitas.length; z++) {

                    espacio = ListaCitas[z].fecha.split(" ");




                    // console.log(espacio)
                    // console.log(espacio)

                    var celdas = document.querySelectorAll("li input");
                    var input = document.getElementById("start").value;
                    //    console.log(celdas)
                    //    console.log(input)

                    for (let i = 0; i < celdas.length; i++) {

                        if (espacio[0] == input) {


                            // console.log("if1")
                            // console.log(espacio[1])
                            var cero = [];

                            cero = celdas[i].value.split(":");
                            // console.log(cero)

                            if (cero[0] < 10) {

                                // console.log("ifmedio")
                                // celdas[i].value = "0" + celdas[i].value;
                                prue = "";
                                prue = "0" + celdas[i].value

                                // console.log( prue + ":00")

                                if (espacio[1] == prue + ":00") {
                                    // console.log("if2")
                                    // console.log(celdas[i])
                                    celdas[i].parentNode.style.backgroundColor = "red";
                                    celdas[i].disabled = true;
                                    //    alert("COLOR ROJO")
                                }
                            }


                            console.log(prue + ":00")

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
            //////////////////FIN HORAS COGIDAS////////////////////////////////////



        });
        /////////////////////FIN MOSTRAR HORAS SEGUN FECHA////////////////////////
    }
    /////////////////////////FIN CAMBIO DE FECHA//////////////////////////////////





}]);

