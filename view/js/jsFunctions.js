document.addEventListener("DOMContentLoaded", function (event) {

	document.getElementById("login").addEventListener('click', login);
	document.getElementById("signUp").addEventListener('click', function(){
		window.location.href="view/newUser.html";
	});
});
function login()
{
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	
	var url = "controller/cLogin.php";
	var data = {'username':username, 'password':password};
	
	fetch(url, {
		  method: 'POST', // or 'POST'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{'Content-Type': 'application/json'}  // input data
		  })
	.then(res => res.json()).then(result => {
	
		alert(result.error); 		
		if (result.error =="no error")
   		{
			window.location.href="view/home.html";
			
   		} else {
			alert(result.error);
   		}		
	})
	.catch(error => console.error('Error status:', error));			
}
function signUp()
{

}
