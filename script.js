function scrollToContact(){

document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});

}

function estimateRefund(){

let income = document.getElementById("income").value;
let deductions = document.getElementById("deductions").value;

income = Number(income);
deductions = Number(deductions);

let taxableIncome = income - deductions;

let taxRate = 0.20;

let estimatedTax = taxableIncome * taxRate;

let refund = deductions * 0.15;

document.getElementById("refundResult").innerText =
"Estimated Refund: $" + refund.toFixed(2);

}

document.getElementById("appointmentForm")?.addEventListener("submit",function(e){

e.preventDefault();

alert("Appointment booked! We will contact you shortly.");

});

function uploadMessage(){

document.getElementById("uploadStatus").innerText =
"Files uploaded successfully. Our tax team will review them.";

}
