// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyDlkb4BBL7oS9kQF7hw3U810EdaRwufCk4",
  authDomain: "don-tax-services.firebaseapp.com",
  projectId: "don-tax-services",
  storageBucket: "don-tax-services.firebasestorage.app",
  messagingSenderId: "218176422554",
  appId: "1:218176422554:web:27fbf008870c26858a1523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTER
window.registerUser = function(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// LOGIN
window.loginUser = function(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Logged in!");
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
};

// LOGOUT
window.logoutUser = function() {
  signOut(auth).then(() => {
    alert("Logged out");
    window.location.href = "index.html";
  });
};
import { onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const emailBox = document.getElementById("userEmail");
    if(emailBox){
      emailBox.innerText = user.email;
    }
  }
});
