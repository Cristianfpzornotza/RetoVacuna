document.addEventListener("DOMContentLoaded", function (event) {
	
    loadCitas();
});

function loadCitas(){	

    var cita ='<button type="button" class="btn btn-primary">Perdir cita</button>'
    

    document.getElementById("insertaraqui").innerHTML = cita; 
	
	// var url = "../controller/cHome.php";

	// fetch(url, {
	//   method: 'GET', // or 'POST'
	// })
	// .then(res => res.json()).then(result => {
		
	// 		console.log('Success:', result.list);
			
	// 		document.getElementById("username").innerHTML = "Hello, "+ result.username;
			
	// 		var companies = result.list;

    //    		var newRow ="<div class='d-flex flex-wrap'>";
  			
	// 		for (let i = 0; i < companies.length; i++) 
	// 		{				
	// 			newRow += "<div class='col-2 m-5'>\
	// 							<a href='"+companies[i].objCompany.web+"' ><img class='img-fluid img-thumbnail' src='../uploads/"+companies[i].objCompany.logo+"'></a>\
	// 						</div>";	
	// 		}
    //    		newRow +="</div>";   
    //    		document.getElementById("companies").innerHTML = newRow; 
	// })
	// .catch(error => console.error('Error status:', error));	
};