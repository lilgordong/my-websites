function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
function toggleFaq(button){
let answer=button.nextElementSibling;
answer.style.display=answer.style.display==="block"?"none":"block";
}
document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Your message was sent. We will contact you shortly.");
});
function pay(){
alert("Payment system will integrate here (Stripe/PayPal).");
}
