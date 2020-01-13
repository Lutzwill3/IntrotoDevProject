
function validateForm(){
	var name=document.getElementById("Name").value;
	var email=document.getElementById("Email").value;
	var phone=document.getElementById("phone").value;

	if (name.length==0||email.length==0||phone.length==0){
		return alert ("Please fill in required fields");
	} else {
		return alert ("Info is valid");
	}
}
