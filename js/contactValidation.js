function validateEmail()
{	
	var emfor=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var em=document.details.mail;
	if(em.value.match(emfor))
	{	
		document.getElementById("email").style.borderColor="#ccc";
	}
	else
	{	
		document.getElementById("email").style.borderColor="red";
	}
	if(em.value===""){
		document.getElementById("email").style.borderColor="#ccc";
		document.getElementById("email").placeholder="Your email ID..";
	}

}

function validateFName(){
	var nm=/^[a-zA-Z]+$/;
	var name=document.details.firstname.value;
	if(name.match(nm)){
		document.getElementById("fname").style.borderColor="#ccc";
	}
	else{
		document.getElementById("fname").style.borderColor="red";
	}
	if(name===""){
		document.getElementById("fname").style.borderColor="#ccc";
		document.getElementById("fname").placeholder="Your name..";
	}
}
function validateLName(){
	var nm=/^[a-zA-Z]+$/;
	var name=document.details.lastname.value;
	if(name.match(nm)){
		document.getElementById("lname").style.borderColor="#ccc";
	}
	else{
		document.getElementById("lname").style.borderColor="red";
	}
	if(name===""){
		document.getElementById("lname").style.borderColor="#ccc";
	}
}

function entries(){
	var fname = document.details.firstname.value;
	var email = document.details.mail.value;
	var message = document.details.subject.value;
	if(fname===""){
		document.getElementById("fname").style.borderColor="red";
		document.getElementById("fname").placeholder="This field is required..";
	}
	if(email===""){
		document.getElementById("email").style.borderColor="red";
		document.getElementById("email").placeholder="This field is required..";
	}
	if(message===""){
		document.getElementById("subject").style.borderColor="red";
		document.getElementById("subject").placeholder="This field is required..";
	}
}
function place(){
	var text=document.details.subject.value;
	
	if(text===""){
		document.getElementById("subject").placeholder="Please enter your comments if any?";
        
	}
	document.getElementById("subject").style.borderColor="#ccc";
}