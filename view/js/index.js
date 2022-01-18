document.addEventListener("DOMContentLoaded",function(){
    console.log(location.pathname);

    //document.getElementById("linkpdf").addEventListener('click', pdf);

    if(location.pathname == "/index.html" || location.pathname=="/"){
        enterlogin();
        loggedVerify();
        graficaBizkaia();
        graficaGipuzkoa();
        miGraficaAra();
        estilosmenu();
        document.getElementById("btnlogin").addEventListener('click', login);
        document.getElementById("buttoncita").addEventListener('click', function(){
            window.location.href = "login.html";
        });
    }else{
        document.getElementById("btnlogout").addEventListener('click', logout);
        loggedVerify();

    }

})

function loggedVerify(){
    
    var url = "../../controller/cLoggedVerify.php";

	fetch(url, {
	  method: 'GET',  
	})
	.then(res => res.json()).then(result => {
       		
		console.log(result);
		
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

function login(){
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "../../controller/cLogin.php";
    var data = {'username': username, 'password': password};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then(result => {

    if(result.error == "no error"){
        window.location.href = "prueba.html";
    }else{
        alert(result.error);
    }

    })
    .catch(error => console.error('Error status:', error));    

}

function graficaBizkaia(){

    var valor = document.getElementById("home-tab").value;

    var url = "../../controller/cDatosCovi.php";
    var data = {'id_provincia': valor};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then(result => {
        
        console.log(result);
        var positivos = [];
        var fallecidos = [];

        for(let i = 0; i < result.datos.length; i++){
             positivos[i] = result.datos[i].positivos;
             fallecidos[i] = result.datos[i].fallecidos;
        }

        let miCanvas=document.getElementById("miGraficaBizk").getContext("2d");

        var xValues = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

            var chart = new Chart(miCanvas,{
            type: "line",
            data: {
                labels: xValues,
                datasets: [{ 
                label:"Positivos",
                data: positivos,
                backgroundColor:"red",
                borderColor:"red",
                fill: false
                }, { 
                    label:"Fallecidos",
                data: fallecidos,
                backgroundColor:"black",
                borderColor:"black",
                fill: false
                }]
            }
    
    });


    })    
    .catch(error => console.error('Error status:', error));    
}

function graficaGipuzkoa(){
    var valor = document.getElementById("profile-tab").value;

    var url = "../../controller/cDatosCovi.php";
    var data = {'id_provincia': valor};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then(result => {
        
        console.log(result);
        var positivos = [];
        var fallecidos = [];

        for(let i = 0; i < result.datos.length; i++){
             positivos[i] = result.datos[i].positivos;
             fallecidos[i] = result.datos[i].fallecidos;
        }

        let miCanvas=document.getElementById("miGraficaGipu").getContext("2d");

        var xValues = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

            var chart = new Chart(miCanvas,{
            type: "line",
            data: {
                labels: xValues,
                datasets: [{ 
                label:"Positivos",
                data: positivos,
                backgroundColor:"red",
                borderColor:"red",
                fill: false
                }, { 
                    label:"Fallecidos",
                data: fallecidos,
                backgroundColor:"black",
                borderColor:"black",
                fill: false
                }]
            }
    
    });


    })    
    .catch(error => console.error('Error status:', error)); 
}

function miGraficaAra(){
    
    var valor = document.getElementById("contact-tab").value;

    var url = "../../controller/cDatosCovi.php";
    var data = {'id_provincia': valor};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json()).then(result => {
        
        console.log(result);
        var positivos = [];
        var fallecidos = [];

        for(let i = 0; i < result.datos.length; i++){
             positivos[i] = result.datos[i].positivos;
             fallecidos[i] = result.datos[i].fallecidos;
        }

        let miCanvas=document.getElementById("miGraficaAra").getContext("2d");

        var xValues = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

            var chart = new Chart(miCanvas,{
            type: "line",
            data: {
                labels: xValues,
                datasets: [{ 
                label:"Positivos",
                data: positivos,
                backgroundColor:"red",
                borderColor:"red",
                fill: false
                }, { 
                    label:"Fallecidos",
                data: fallecidos,
                backgroundColor:"black",
                borderColor:"black",
                fill: false
                }]
            }
    
    });


    })    
    .catch(error => console.error('Error status:', error)); 


}

function estilosmenu(){
    document.getElementById("citavacunas").addEventListener('mouseover', function(){
        document.querySelector("#citavacunas .halo").style.fontSize = "35px";
        document.querySelector("#citavacunas .halo2").style.fontSize = "18px";
        document.querySelector("#citavacunas .btncita").style.width = "160px";
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
        document.querySelector("#hospitalzona .halo").style.fontSize = "35px";
        document.querySelector("#hospitalzona .halo2").style.fontSize = "18px";
        document.querySelector("#hospitalzona .btncita").style.width = "160px";
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

function enterlogin(){
    document.getElementById("username").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btnlogin").click();
        }
        });
        
        document.getElementById("password").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btnlogin").click();
        }
        });
}

function changebg(id){
    if(id=='home-tab'){
        document.getElementById('myTabContent').style.backgroundColor='lightblue';
        document.getElementById('home').style.backgroundColor='lightblue';
    }else if(id=='profile-tab'){
        document.getElementById('myTabContent').style.backgroundColor='rgb(255, 246, 117)';
        document.getElementById('home').style.backgroundColor='rgb(255, 246, 117)';
    }else{
        document.getElementById('myTabContent').style.backgroundColor='rgb(148, 255, 133)';
        document.getElementById('home').style.backgroundColor='rgb(148, 255, 133)';
    }
}




    



    



