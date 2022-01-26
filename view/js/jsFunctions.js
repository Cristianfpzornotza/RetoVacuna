document.addEventListener("DOMContentLoaded", function (event) {

	loggedVerify();
	document.getElementById("login").addEventListener('click', login);
	/*document.getElementById("signUp").addEventListener('click', function(){
		window.location.href="view/newUser.html";
	});*/
});
function login()
{
	var TIS=document.getElementById("TIS").value;
	var Apellido=document.getElementById("Apellido").value;
	var Fecha=document.getElementById("Fecha").value;
	
	var url = "../../controller/cLoginPaciente.php";
	var data = {'TIS':TIS, 'apellido':Apellido, 'fecha':Fecha};
	
	fetch(url, {
		  method: 'POST', // or 'POST'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
	.then(res => res.json()).then(result => {
	
		alert(result.error); 		
		if (result.error =="no error")
   		{
			   console.log(result);
			window.location.href="../view/consulta.html";
			
   		} else {
			alert(result.error);
   		}		
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
			window.location.href = "../view/consulta.html";
	    } else {
			
	    }
	})
	.catch(error => console.error('Error status:', error));
}




