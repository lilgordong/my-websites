function portalLogin(){
let email=document.getElementById("portalEmail").value;
let pass=document.getElementById("portalPass").value;
if(email&&pass){alert("Login successful (demo)");}else{alert("Enter credentials");}
}
function uploadDocs(){alert("Documents uploaded (demo)");}
function sendMessage(){let msg=document.getElementById("clientMessage").value; if(msg){alert("Message sent!");}else{alert("Enter a message");}}
