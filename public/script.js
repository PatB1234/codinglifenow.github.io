// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
    apiKey: "AIzaSyCHv1UF1c9RvDFvYfKaaerDj3hc_H394U4",
    authDomain: "thepeoplecoding.firebaseapp.com",
    projectId: "thepeoplecoding",
    storageBucket: "thepeoplecoding.appspot.com",
    messagingSenderId: "342469205229",
    appId: "1:342469205229:web:d80dd3e525ae39de52c0e4",
    measurementId: "G-48ZJXNKZCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
