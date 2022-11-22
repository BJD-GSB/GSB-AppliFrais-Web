
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
        let Nbrkm = document.getElementById("Nbrkm").value;
        let PF = document.getElementById('PuissF').value;
        let Carbur = document.getElementById('Carbur').value;
        let Nbrnuit = document.getElementById("Nbrnuit").value;
        let Nbrrepas = document.getElementById("Nbrrepas").value;

        NewFicheForfait(titre, Nbrkm, PF, Carbur, Nbrnuit, Nbrrepas);

    };
});

submitfiche.addEventListener("click", function () {

        let titre = document.getElementById("titre").value;
        let Nbrkm = document.getElementById("Nbrkm").value;
        let PF = document.getElementById('PuissF').value;
        let Carbur = document.getElementById('Carbur').value;
        let Nbrnuit = document.getElementById("Nbrnuit").value;
        let Nbrrepas = document.getElementById("Nbrrepas").value;

        NewFicheForfait(titre, Nbrkm, PF, Carbur, Nbrnuit, Nbrrepas);
});


function NewFicheForfait(titre, NbrKm, PF, Carburant, NbrNuit, NbrRepas) {
    const newficheforfait = push(child(ref(database), 'fiches/forfait')).key;


    let usermail = auth.currentUser.email;

    let date = new Date().toLocaleDateString('fr-FR', {
        timeZone: 'Europe/Paris',
    });
    
    set(ref(database, 'fiches/forfait/' + newficheforfait), {
        date: date,
        titre: titre,
        email: usermail,
        Km: NbrKm,
        puissancefiscal: PF,
        carburant: Carburant,
        nuits: NbrNuit,
        repas: NbrRepas,
    }).then(() => {
        alert("Merci ! Un Comptable à reçu votre Fiche.");
        window.location.href = window.location.href;
    }).catch((error) => {
        alert("Erreur :" + error);
    });
};
