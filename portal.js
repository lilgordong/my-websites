function login(){

let email = document.getElementById("username").value;

let password = document.getElementById("password").value;

if(email && password){

window.location.href = "dashboard.html";

}else{

document.getElementById("loginMessage").innerText =
"Please enter login details";

}

}

function addTask(){

let taskInput = document.getElementById("newTask");

let taskList = document.getElementById("taskList");

let li = document.createElement("li");

li.textContent = taskInput.value;

taskList.appendChild(li);

taskInput.value = "";

}

function uploadDocs(){

document.getElementById("uploadStatus").innerText =
"Documents uploaded successfully";

}

function bookAppointment(){

alert("Appointment booked successfully");

}

function payInvoice(){

alert("Payment system will process invoice");

}
