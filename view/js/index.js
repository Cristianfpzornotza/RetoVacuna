document.addEventListener("DOMContentLoaded",function(){


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



    
})

/*$( document ).ready(function() {
    
$("#citavacunas").hover(function(){
        alert("hola");
    });

});*/

