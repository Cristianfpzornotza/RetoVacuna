document.addEventListener("DOMContentLoaded", function (event) {

	loadSectors();
	document.getElementById("addCompanyUser").addEventListener('click', addCompanyUser);
});
function loadSectors(){	
	
	var url = "../controller/cLoadSectors.php";

	fetch(url, {
	  method: 'GET', // or 'POST'
	})
	.then(res => res.json()).then(result => {
		
			console.log('Success:', result.list);
			
			document.getElementById("username").innerHTML = "Hello, "+ result.username;
			
			var sectors = result.list;

       		var newRow ="<div class='d-flex flex-wrap'>";
  			
			for (let i = 0; i < sectors.length; i++) 
			{				
				newRow += "<div class='col-2 m-5'>\
								<a href='"+companies[i].objCompany.web+"' ><img class='img-fluid img-thumbnail' src='../images/"+companies[i].objCompany.logo+"'></a>\
							</div>";	
			}
       		newRow +="</div>";   
       		document.getElementById("companies").innerHTML = newRow; 
	})
	.catch(error => console.error('Error status:', error));	
};
function logout(){
	
	var url = "controller/cLogout.php";
	fetch(url, {
		  method: 'GET', 
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
	.then(res => res.json()).then(result => {
	
		console.log(result.error);
		
		window.location.href="../index.html";
	})
	.catch(error => console.error('Error status:', error));		
}

