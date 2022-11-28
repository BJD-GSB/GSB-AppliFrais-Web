// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

import { getDatabase, set, ref, update, onValue, get, child, remove } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";



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


var NbrTickets = 0;
var ok = "OK";
var suppr = "Supprimer";
var tbody = document.getElementById('tbody1');

function AddTicketToTable(id_ticket, email, nom, prenom, problem, desc) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('button');
    let td8 = document.createElement('button');


    td1.innerHTML = ++NbrTickets;
    td2.innerHTML = email;
    td3.innerHTML = nom;
    td4.innerHTML = prenom;
    td5.innerHTML = problem;
    td6.innerHTML = desc;

    td7.setAttribute('id', 'OKbutton');
    td7.setAttribute('type', 'button');
    td7.setAttribute('name', 'OKbutton');

    td7.onclick = function (e) {

        if (confirm("Voulez-vous vraiment Valider ce Ticket ?")) {

            remove(ref(database, 'tickets/' + id_ticket))
                .then(() => {
                    alert("Ticket Validé !");
                })
        } else {
            alert("Action annulé !");
        }
    };

    td7.innerHTML = ok;

    td8.setAttribute('id', 'Supprbutton');
    td8.setAttribute('type', 'button');
    td8.setAttribute('name', 'Supprbutton');

    td8.onclick = function (e) {

        if (confirm("Voulez-vous vraiment Supprimer ce Ticket ?")) {

            remove(ref(database, 'tickets/' + id_ticket))
                .then(() => {
                    alert("Ticket Annuler !");
                })
        } else {
            alert("Action annulé !");
        }
    };

    td8.innerText = suppr;


    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);


    tbody.appendChild(trow);
}

function AddAllTicketsToTable(Tickets) {
    NbrTickets = 0;
    tbody.innerHTML = "";
    Tickets.forEach(element => {
        AddTicketToTable(element.id_ticket, element.email, element.nom, element.prenom, element.problem, element.description);
    });
}


function GetAllTicketsRT() {
    const dbref = ref(database, "tickets");

    onValue(dbref, (snapshot) => {
        var tickets = [];

        snapshot.forEach(childSnapshot => {
            tickets.push(childSnapshot.val());
        })
        AddAllTicketsToTable(tickets)
    })
}

window.onload = GetAllTicketsRT;



