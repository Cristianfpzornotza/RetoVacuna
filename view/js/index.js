document.addEventListener("DOMContentLoaded",function(){

    estilosmenu();
    graficaBizkaia();
    graficaGipuzkoa();
    miGraficaAra();
})

function graficaBizkaia(){
    let miCanvas=document.getElementById("miGraficaBizk").getContext("2d");

    var xValues = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

        var chart = new Chart(miCanvas,{
        type: "line",
        data: {
            labels: xValues,
            datasets: [{ 
            label:"Positivos",
            data: ["255","871","552","661","431","550","620","700","759","639","721","809"],
            backgroundColor:"red",
            borderColor:"red",
            fill: false
            }, { 
                label:"Fallecidos",
            data: ["120","50","100","200","20","88","34","91","107","200","300","500"],
            backgroundColor:"black",
            borderColor:"black",
            fill: false
            }]
        }
 
});
}

function graficaGipuzkoa(){
    let miCanvas=document.getElementById("miGraficaGipu").getContext("2d");

    var xValues = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

        var chart = new Chart(miCanvas,{
        type: "line",
        data: {
            labels: xValues,
            datasets: [{ 
            label:"Positivos",
            data: ["332","128","476","543","675","411","700","721","659","539","421","709"],
            backgroundColor:"red",
            borderColor:"red",
            fill: false
            }, { 
                label:"Fallecidos",
            data: ["100","75","150","220","120","58","74","121","20","190","300","400"],
            backgroundColor:"black",
            borderColor:"black",
            fill: false
            }]
        }
 
});
}

function miGraficaAra(){
    let miCanvas=document.getElementById("miGraficaAra").getContext("2d");

    var xValues = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

        var chart = new Chart(miCanvas,{
        type: "line",
        data: {
            labels: xValues,
            datasets: [{ 
            label:"Positivos",
            data: ["432","228","276","443","575","311","500","421","659","739","821","409"],
            backgroundColor:"red",
            borderColor:"red",
            fill: false
            }, { 
                label:"Fallecidos",
            data: ["150","21","50","320","220","158","134","221","420","190","20","100"],
            backgroundColor:"black",
            borderColor:"black",
            fill: false
            }]
        }
 
});
}

function estilosmenu(){
    document.getElementById("citavacunas").addEventListener('mouseover', function(){
        document.querySelector("#citavacunas .halo").style.fontSize = "50px";
        document.querySelector("#citavacunas .halo2").style.fontSize = "18px";
        document.querySelector("#citavacunas .btncita").style.width = "200px";
        document.querySelector("#citavacunas .halo").style.transition = "0.5s";
        document.querySelector("#citavacunas .halo2").style.transition = "0.5s";
        document.querySelector("#citavacunas .btncita").style.transition = "0.5s";
    });

    
    document.getElementById("citavacunas").addEventListener('mouseout', function(){
        document.querySelector("#citavacunas .halo").style.fontSize = "25px";
        document.querySelector("#citavacunas .halo2").style.fontSize = "15px";
        document.querySelector("#citavacunas .btncita").style.width = "75px";

    });
    


    document.getElementById("hospitalzona").addEventListener('mouseover', function(){
        document.querySelector("#hospitalzona .halo").style.fontSize = "50px";
        document.querySelector("#hospitalzona .halo2").style.fontSize = "18px";
        document.querySelector("#hospitalzona .btncita").style.width = "200px";
        document.querySelector("#hospitalzona .halo").style.transition = "0.5s";
        document.querySelector("#hospitalzona .halo2").style.transition = "0.5s";
        document.querySelector("#hospitalzona .btncita").style.transition = "0.5s";
    });

    document.getElementById("hospitalzona").addEventListener('mouseout', function(){
        document.querySelector("#hospitalzona .halo").style.fontSize = "25px";
        document.querySelector("#hospitalzona .halo2").style.fontSize = "15px";
        document.querySelector("#hospitalzona .btncita").style.width = "75px";

    });
}






    



    



