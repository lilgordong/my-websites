function bookAppointment(){
let date=document.getElementById("apptDate").value;
let time=document.getElementById("apptTime").value;
if(!date){alert("Select a date"); return;}
alert(`Appointment booked on ${date} at ${time}. We will contact you shortly.`);
}
