document.addEventListener("DOMContentLoaded", function (event) {

	loggedVerify();
	document.getElementById("logout").addEventListener('click', logout);
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

function loggedVerify(){
	var url = "../../controller/cLoggedVerifyPaciente.php";

	fetch(url, {
	  method: 'GET',  
	})
	.then(res => res.json()).then(result => {
       		
		console.log(result);
		
	    if (result.error == "Sesión iniciada")
	    {
            alert("Iniciao");
	    } else {
			window.location.href = "login.html";
	        
	    }
	})
	.catch(error => console.error('Error status:', error));
}

