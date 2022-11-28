
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

import { getDatabase, set, ref, update, push, child, onValue } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";



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
var tbodyelement1 = document.getElementById('tbody2');
var tbodyelement2 = document.getElementById('tbody3');
var tbodyelement3 = document.getElementById('tbody4');
var tbodyconfirm = document.getElementById('tbody5');
var tbodystatus = document.getElementById('tbody6');


//INFO GET

function AddFicheHorsForfaitToTable1(date,title, email){
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

function AddAllFichesHorsForfaitToTable1(FichesHorsForfait1){
    NbrTickets=0;
    tbodyinfo.innerHTML="";
    FichesHorsForfait1.forEach(element => {
        AddFicheHorsForfaitToTable1(element.date,element.titre, element.email);
    });
}


function GetAllFichesHorsForfaitRT1(){
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var FichesHorsForfait1 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "horsforfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        FichesHorsForfait1.push(DataSnapshot.val());
                    })
                }
            })


        })
    AddAllFichesHorsForfaitToTable1(FichesHorsForfait1)
   })
}

// ELEMENT1 GET

function AddFicheHorsForfaitToTable2(element1, prix1){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    td1.innerHTML= element1;
    td2.innerHTML= prix1;


    trow.appendChild(td1);
    trow.appendChild(td2);

    tbodyelement1.appendChild(trow);
}

function AddAllFichesForfaitToTable2(FichesHorsForfait2){
    tbodyelement1.innerHTML="";
    FichesHorsForfait2.forEach(element => {
        AddFicheHorsForfaitToTable2(element.element1, element.prix1);
    });
}


function GetAllFichesHorsForfaitRT2(){
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var FichesHorsForfait2 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "horsforfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        FichesHorsForfait2.push(DataSnapshot.val());
                    })
                }
            })


        })
    AddAllFichesForfaitToTable2(FichesHorsForfait2)
   })
}

//ELEMENT2 GET

function AddFicheHorsForfaitToTable3(element2, prix2){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    td1.innerHTML= element2;
    td2.innerHTML= prix2;


    trow.appendChild(td1);
    trow.appendChild(td2);

    tbodyelement2.appendChild(trow);
}

function AddAllFichesForfaitToTable3(FichesHorsForfait3){
    tbodyelement2.innerHTML="";
    FichesHorsForfait3.forEach(element => {
        AddFicheHorsForfaitToTable3(element.element2, element.prix2);
    });
}


function GetAllFichesHorsForfaitRT3(){
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var FichesHorsForfait3 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "horsforfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        FichesHorsForfait3.push(DataSnapshot.val());
                    })
                }
            })


        })
    AddAllFichesForfaitToTable3(FichesHorsForfait3)
   })
}

//GET ELEMENT3

function AddFicheHorsForfaitToTable4(element3, prix3){
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    td1.innerHTML= element3;
    td2.innerHTML= prix3;


    trow.appendChild(td1);
    trow.appendChild(td2);

    tbodyelement3.appendChild(trow);
}

function AddAllFichesHorsForfaitToTable4(FichesHorsForfait4){
    tbodyelement3.innerHTML="";
    FichesHorsForfait4.forEach(element => {
        AddFicheHorsForfaitToTable4(element.element3, element.prix3);
    });
}


function GetAllFichesHorsForfaitRT4(){
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var FichesHorsForfait4 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "horsforfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        FichesHorsForfait4.push(DataSnapshot.val());
                    })
                }
            })


        })
    AddAllFichesHorsForfaitToTable4(FichesHorsForfait4)
   })
}

// GET CONFIRMATION

function AddFicheHorsForfaitToTable5(id_horsforfait, id_utilis){
    let trow = document.createElement('tr');
    let td1 = document.createElement('button');
    let td2 = document.createElement('button');

    td1.setAttribute('id', 'Validerbutton');
    td1.setAttribute('type', 'button');
    td1.setAttribute('name', 'Validerbutton');

    td1.onclick = function (e) {
        var Valide = "validé";

        if (confirm("Voulez-vous vraiment VALIDER cette fiche ?")) {

            update(ref(database, 'fiches/' + id_utilis +'/horsforfait/' + id_horsforfait), {
                status: Valide,
            })
                .then(() => {
                    alert("Fiche validée !");
                })
        } else {
            alert("Action annulé !");
        }
    }

    td1.innerHTML= ok;
    

    td2.setAttribute('id', 'Refuserbutton');
    td2.setAttribute('type', 'button');
    td2.setAttribute('name', 'Refuserbutton');

    td2.onclick = function (e) {
        var Refuser = "refuser";

        if (confirm("Voulez-vous vraiment REFUSER cette fiche ?")) {

            update(ref(database, 'fiches/' + id_utilis +'/horsforfait/' + id_horsforfait), {
                status: Refuser,
            })
                .then(() => {
                    alert("Fiche Refusée !");
                })
        } else {
            alert("Action annulé !");
        }
    };

    td2.innerText= suppr;



    trow.appendChild(td1);
    trow.appendChild(td2);

    tbodyconfirm.appendChild(trow);
}

function AddAllFichesHorsForfaitToTable5(ficheshorsforfait5){
    tbodyconfirm.innerHTML="";
    ficheshorsforfait5.forEach(element => {
        AddFicheHorsForfaitToTable5(element.id_horsforfait, element.id_user);
    });
}

function GetAllFichesHorsForfaitRT5(){
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var FichesHorsForfait5 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "horsforfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        FichesHorsForfait5.push(DataSnapshot.val());
                    })
                }
            })


        })
    AddAllFichesHorsForfaitToTable5(FichesHorsForfait5)
   })
}

//GET STATUS

function AddFicheHorsForfaitToTable6(status) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('img');

    td1.setAttribute('id', 'statusimg');

     switch(status){
        case "validé":
            var sourcestatus = "../../../../images/icons/validé";
            td1.setAttribute('src', sourcestatus);
            td1.setAttribute('alt', 'status validé');
            td1.setAttribute('title', 'Validé');
            break;
        case "refuser":
            var sourcestatus = "../../../../images/icons/refuser";
            td1.setAttribute('src', sourcestatus);
            td1.setAttribute('alt', 'status refusé');
            td1.setAttribute('title', 'Refusé');

            break;
        default:
            var sourcestatus = "../../../../images/icons/attente";
            td1.setAttribute('src', sourcestatus);
            td1.setAttribute('alt', 'status en attente');
            td1.setAttribute('title', 'En Attente');

     }


    trow.appendChild(td1);

    tbodystatus.appendChild(trow);
}

function AddAllFichesHorsForfaitToTable6(FicheshorsForfait6) {
    tbodystatus.innerHTML = "";
    FicheshorsForfait6.forEach(element => {
        AddFicheHorsForfaitToTable6(element.status);
    });
}

function GetAllFichesHorsForfaitRT6() {
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var FicheshorsForfait6 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "horsforfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        FicheshorsForfait6.push(DataSnapshot.val());
                    })
                }
            })


        })
        AddAllFichesHorsForfaitToTable6(FicheshorsForfait6)
    })
}



window.onload = GetAllFichesHorsForfaitRT1(), GetAllFichesHorsForfaitRT2(), GetAllFichesHorsForfaitRT3(), GetAllFichesHorsForfaitRT4(), GetAllFichesHorsForfaitRT5(), GetAllFichesHorsForfaitRT6();
