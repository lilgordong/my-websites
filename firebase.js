<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDlkb4BBL7oS9kQF7hw3U810EdaRwufCk4",
    authDomain: "don-tax-services.firebaseapp.com",
    projectId: "don-tax-services",
    storageBucket: "don-tax-services.firebasestorage.app",
    messagingSenderId: "218176422554",
    appId: "1:218176422554:web:27fbf008870c26858a1523",
    measurementId: "G-S9HG3Z6CD1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
