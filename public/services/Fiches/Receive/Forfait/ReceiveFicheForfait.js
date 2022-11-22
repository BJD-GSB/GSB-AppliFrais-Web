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
var ok = "Valider";
var suppr = "Refuser";
var tbodyinfo = document.getElementById('tbody1');
var tbodytransport = document.getElementById('tbody2');
var tbodynuits = document.getElementById('tbody3');
var tbodyrepas = document.getElementById('tbody4');
var tbdodyconfirm = document.getElementById('tbody5');

//INFO GET

function AddFicheForfaitToTable1(date,title, email){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');


    td1.innerHTML= ++NbrTickets;
    td2.innerHTML= date;
    td3.innerHTML= title;
    td4.innerHTML= email;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);


    tbodyinfo.appendChild(trow);
}

function AddAllFichesForfaitToTable1(FichesForfait1){
    NbrTickets=0;
    tbodyinfo.innerHTML="";
    FichesForfait1.forEach(element => {
        AddFicheForfaitToTable1(element.date,element.titre, element.email);
    });
}


function GetAllFichesForfaitRT1(){
    const dbref = ref(database, "fiches/forfait");

   onValue(dbref, (snapshot)=>{
    var fichesforfait1 = [];

    snapshot.forEach(childSnapshot => {
        fichesforfait1.push(childSnapshot.val());
    })
    AddAllFichesForfaitToTable1(fichesforfait1)
   })
}

// TRANSPORT GET

function AddFicheForfaitToTable2(nbrkm, pf, carburant){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');




    td1.innerHTML= nbrkm;
    td2.innerHTML= pf;
    td3.innerHTML= carburant;


    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);



    tbodytransport.appendChild(trow);
}

function AddAllFichesForfaitToTable2(FichesForfait2){
    tbodytransport.innerHTML="";
    FichesForfait2.forEach(element => {
        AddFicheForfaitToTable2(element.Km, element.puissancefiscal, element.carburant);
    });
}


function GetAllFichesForfaitRT2(){
    const dbref = ref(database, "fiches/forfait");

   onValue(dbref, (snapshot)=>{
    var fichesforfait2 = [];

    snapshot.forEach(childSnapshot => {
        fichesforfait2.push(childSnapshot.val());
    })
    AddAllFichesForfaitToTable2(fichesforfait2)
   })
}

//NUITS GET

function AddFicheForfaitToTable3(nbrnuit){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');

    td1.innerHTML= nbrnuit;

    trow.appendChild(td1);


    tbodynuits.appendChild(trow);
}

function AddAllFichesForfaitToTable3(FichesForfait3){
    tbodynuits.innerHTML="";
    FichesForfait3.forEach(element => {
        AddFicheForfaitToTable3(element.nuits);
    });
}


function GetAllFichesForfaitRT3(){
    const dbref = ref(database, "fiches/forfait");

   onValue(dbref, (snapshot)=>{
    var fichesforfait3 = [];

    snapshot.forEach(childSnapshot => {
        fichesforfait3.push(childSnapshot.val());
    })
    AddAllFichesForfaitToTable3(fichesforfait3)
   })
}

//GET REPAS

function AddFicheForfaitToTable4(nbrrepas){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');

    td1.innerHTML= nbrrepas;


    trow.appendChild(td1);


    tbodyrepas.appendChild(trow);
}

function AddAllFichesForfaitToTable4(FichesForfait4){
    tbodyrepas.innerHTML="";
    FichesForfait4.forEach(element => {
        AddFicheForfaitToTable4(element.repas);
    });
}


function GetAllFichesForfaitRT4(){
    const dbref = ref(database, "fiches/forfait");

   onValue(dbref, (snapshot)=>{
    var fichesforfait4 = [];

    snapshot.forEach(childSnapshot => {
        fichesforfait4.push(childSnapshot.val());
    })
    AddAllFichesForfaitToTable4(fichesforfait4)
   })
}

// GET CONFIRMATION

function AddFicheForfaitToTable5(){
    let trow = document.createElement('tr');
    let td1 = document.createElement('button');
    let td2 = document.createElement('button');

    td1.setAttribute('id', 'Validerbutton');
    td1.setAttribute('type', 'button');
    td1.setAttribute('name', 'Validerbutton');
    td1.innerHTML= ok;

    td2.setAttribute('id', 'Refuserbutton');
    td2.setAttribute('type', 'button');
    td2.setAttribute('name', 'Refuserbutton');
    td2.innerText= suppr;


    trow.appendChild(td1);
    trow.appendChild(td2);

    tbdodyconfirm.appendChild(trow);
}

function AddAllFichesForfaitToTable5(FichesForfait5){
    tbdodyconfirm.innerHTML="";
    FichesForfait5.forEach(element => {
        AddFicheForfaitToTable5(element.email);
    });
}

function GetAllFichesForfaitRT5(){
    const dbref = ref(database, "fiches/forfait");

   onValue(dbref, (snapshot)=>{
    var fichesforfait5 = [];

    snapshot.forEach(childSnapshot => {
        fichesforfait5.push(childSnapshot.val());
    })
    AddAllFichesForfaitToTable5(fichesforfait5)
   })
}


window.onload = GetAllFichesForfaitRT1(), GetAllFichesForfaitRT2(), GetAllFichesForfaitRT3(), GetAllFichesForfaitRT4(), GetAllFichesForfaitRT5();
