import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* REGISTER */
window.registerUser = function(email, password) {
  createUserWithEmailAndPassword(window.auth, email, password)
    .then(() => {
      alert("Account created!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

/* LOGIN */
window.loginUser = function(email, password) {
  signInWithEmailAndPassword(window.auth, email, password)
    .then(() => {
      alert("Logged in!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

/* LOGOUT */
window.logoutUser = function() {
  signOut(window.auth).then(() => {
    window.location.href = "login.html";
  });
};
