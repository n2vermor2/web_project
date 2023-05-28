const client= {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	}
const request = {
	style: "",
	room: "",
	area:0
}
let valid = false;
function over(){
  document.getElementById("submit").style.backgroundColor = "#852134";
}
function out(){
  document.getElementById("submit").style.backgroundColor = "#964167";
}
function input(){
	client.email = document.getElementById("email").value;
	for(var i=0; i<client.email.length; i++){
		if(client.email[i]=='@') valid=true; 
	}
	if(valid)
  		document.getElementById("email").style.color = "black";
  	else
  		document.getElementById("email").style.color = "red";
  	valid = false;

}
function validate(){
	client.firstName = document.getElementById("firstname").value;
	client.lastName = document.getElementById("lastname").value;
	client.email = document.getElementById("email").value;
	client.phone = document.getElementById("phone").value;
	request.style = document.querySelector("#style").value;
	request.room = document.querySelector("#room").value;
	request.area = document.getElementById("area").value;
	for(var i=0; i<client.email.length; i++){
		if(client.email[i]=='@') valid=true; 
	}
	if(!valid){
		document.getElementById("result").innerHTML = "Invalid email address!";
	}
	else if(request.area<=0){
		document.getElementById("result").innerHTML = "Enter a valid area!";
	}
	else if (client.firstName=="" || client.lastName=="" || client.email=="" || client.phone==""){
		document.getElementById("result").innerHTML = "Please fill out all of the fields";
	}
	else if (!document.getElementById("consent").checked){
		document.getElementById("result").innerHTML = "Check the box above!";
	}
	else{
		document.getElementById("result").innerHTML = client.firstName + " " + client.lastName + ", you will be contacted by one of our managers! Your contact information : " + client.email + " - email,  " + client.phone + " - phone number. You have left a request for " + request.room + " which is " + request.area + " square meters in a " + request.style + " style. ";
		var audio = new Audio('success.mp3');
		audio.play();
		confetti({
			particleCount: 200,
		  	spread: 180
		});
	}
}
//JQUERY - 10 effects
			$(document).ready(function(){
			  	$("#line1").click(function(){ //slide down
			   		$("#work1").slideDown("slow"); 
			  	});
			  	$("#close1").click(function(){ //slide up
			   		$("#work1").slideUp("slow"); 
			  	});
			  	$("#line2").click(function(){ //fade in
				  	$("#work2").fadeIn();
	  				$("#work2").fadeIn("slow");
	  				$("#work2").fadeIn(3500);
			  	});
			  	$("#close2").click(function(){ //fade out
				  	$("#work2").fadeOut();
	  				$("#work2").fadeOut("slow");
			  	});
			  	$("#line3").click(function(){ //slide toggle
			    	$("#work3").slideToggle();
				  	$("#work3").slideToggle("slow");
				  	$("#work3").slideToggle(3000);
			  	});
			  	$("#close3").click(function(){ //chaining
			    	$("#req").slideDown(1000).slideUp(1000);
			  	});
			  	$("#stop").click(function(){ //stop animation
			    	$("#req").stop();
			  	});
			  	$("#hide").click(function(){ //hide
			    	$(".testimonials").hide(1000);
			    	$("#hide").hide();
			    	$("#show").show();
			  	});
			  	$("#show").click(function(){ //show
			    	$(".testimonials").show(1000); //callback
			    	$("#hide").show();
			    	$("#show").hide();
			  });
			});