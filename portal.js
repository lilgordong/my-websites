function login(){

let email=document.getElementById("email").value;

let pass=document.getElementById("password").value;

if(email && pass){

window.location="dashboard.html";

}else{

document.getElementById("loginMsg").innerText="Enter login details";

}

}

function uploadDocs(){

alert("Documents uploaded successfully");

}

function sendMessage(){

alert("Message sent to tax preparer");

}

function pay(){

alert("Payment system will connect here");

}
