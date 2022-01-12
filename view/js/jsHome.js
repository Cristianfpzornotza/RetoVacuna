document.addEventListener("DOMContentLoaded", function (event) {

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

