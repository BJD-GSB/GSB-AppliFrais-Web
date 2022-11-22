
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

const submitficheenter = document.getElementById("titre");


submitficheenter.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {

        let titre = document.getElementById("titre").value;
        let titre1 = document.getElementById("titre1").value;
        let prix1 = document.getElementById("prix1").value;
        let titre2 = document.getElementById('titre2').value;
        let prix2 = document.getElementById('prix2').value;
        let titre3 = document.getElementById("titre3").value;
        let prix3 = document.getElementById("prix3").value;

        NewFicheHorsForfait(titre, titre1, prix1, titre2, prix2, titre3, prix3);

    };
});

submitfiche.addEventListener("click", function () {

    let titre = document.getElementById("titre").value;
    let titre1 = document.getElementById("titre1").value;
    let prix1 = document.getElementById("prix1").value;
    let titre2 = document.getElementById('titre2').value;
    let prix2 = document.getElementById('prix2').value;
    let titre3 = document.getElementById("titre3").value;
    let prix3 = document.getElementById("prix3").value;

    NewFicheHorsForfait(titre, titre1, prix1, titre2, prix2, titre3, prix3);
});


function NewFicheHorsForfait(titre, titre1, prix1, titre2, prix2, titre3,prix3) {
    const newfichehorsforfait = push(child(ref(database), 'fiches/horsforfait')).key;


    let usermail = auth.currentUser.email;

    let date = new Date().toLocaleDateString('fr-FR', {
        timeZone: 'Europe/Paris',
    });
    
    set(ref(database, 'fiches/horsforfait/' + newfichehorsforfait), {
        date: date,
        email: usermail,
        titre: titre,
        element1: titre1,
        prix1: prix1,
        element2: titre2,
        prix2: prix2,
        element3: titre3,
        prix3: prix3,
    }).then(() => {
        alert("Merci ! Un Comptable à reçu votre Fiche.");
        window.location.href = window.location.href;
    }).catch((error) => {
        alert("Erreur :" + error);
    });
};
