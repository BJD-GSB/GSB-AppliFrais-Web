
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

import { getDatabase, set, ref, update, push, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDjpS-htNBVEW6eKROAUH43NmlKrs3sNSM",

    authDomain: "gsbprojectbjd.firebaseapp.com",

    databaseURL: "https://gsbprojectbjd-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "gsbprojectbjd",

    storageBucket: "gsbprojectbjd.appspot.com",

    messagingSenderId: "556712412560",

    appId: "1:556712412560:web:9f383b3031b54423b29f15",

    measurementId: "G-4DWMJK6391"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const database = getDatabase(app);

const analytics = getAnalytics(app);

const supportdataEnter = document.getElementById("nom");

const connectsupp = document.getElementById("connect-supp");

const appsupp = document.getElementById("app-supp");

supportdataEnter.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {

        let email = document.getElementById("email").value;
        let prenom = document.getElementById("prenom").value;
        let nom = document.getElementById("nom").value;
        let description = document.getElementById("field-text-supp").value;
        let problem = document.querySelector('input[name="problem"]:checked').value;

         NewTicket(email, prenom, nom, description, problem);

    };
});

submitsupp.addEventListener("click", function () {


    let email = document.getElementById("email").value;
    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let description = document.getElementById("field-text-supp").value;
    let problem = document.querySelector('input[name="problem"]:checked').value;

    NewTicket(email, prenom, nom, description, problem);

});

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user);
        connectsupp.style.visibility = "collapse";
        appsupp.style.visibility = "visible";
        // ...
    } else {
        // User is signed out
        // ...
        console.log(user);
    }
});

function NewTicket(email, prenom, nom, description, problem) {
    const newticketkey = push(child(ref(database), 'tickets')).key;

    set(ref(database, 'tickets/' + newticketkey), {
            email: email,
            prenom: prenom,
            nom: nom,
            description: description,
            problem: problem,
    }).then(() => {
        alert("Merci ! Un membre du support à reçu votre demande.");
        window.location.href = window.location.href;
    }).catch((error) => {
        alert("Erreur :" + error);
    });
};
