document.getElementById("btnradio2").addEventListener("click", function() {
    
    
    loadHistorial();
  });

function loadHistorial(){	

    var tabla ='<h2 id="historialpaciente">Nombre completo del paciente</h2>'
    +'<table class="table" id="tablahistorial">'
    +'<thead>'
      +'<tr>'
      +'<th scope="col">Numero</th>'
      +  '<th scope="col">Descripcion</th>'
       + '<th scope="col">Vacuna</th>'
      +  '<th scope="col">Fecha</th>'
      +  '</tr>'
     + '</thead>'
    +'<tbody>'
    +'<tr>'
    +    '<th scope="row">1</th>'
    +    '<td>Mark</td>'
    +    '<td>Otto</td>'
    +    '<td>@mdo</td>'
    +    '</tr>'
    +  '<tr>'
    +  '<th scope="row">2</th>'
    +    '<td>Jacob</td>'
    +    '<td>Thornton</td>'
    +    '<td>@fat</td>'
    +    '</tr>'
    +  ' <tr>'
    +  '<th scope="row">3</th>'
    +    '<td colspan="2">Larry the Bird</td>'
    +    '<td>@twitter</td>'
    +    '</tr>'
    +  '</tbody'
    +'</table>'

    document.getElementById("insertaraqui").innerHTML = tabla; 
	
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