import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

/* =========================
   REGISTER
========================= */
window.registerUser = function(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

/* =========================
   LOGIN
========================= */
window.loginUser = function(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

/* =========================
   LOGOUT
========================= */
window.logoutUser = function() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};
