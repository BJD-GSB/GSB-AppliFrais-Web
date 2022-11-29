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
var tbodyconfirm = document.getElementById('tbody5');
var tbodystatus = document.getElementById('tbody6');

//INFO GET

function AddFicheForfaitToTable1(date, title, email) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');


    td1.innerHTML = ++NbrTickets;
    td2.innerHTML = date;
    td3.innerHTML = title;
    td4.innerHTML = email;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);


    tbodyinfo.appendChild(trow);
}

function AddAllFichesForfaitToTable1(FichesForfait1) {
    NbrTickets = 0;
    tbodyinfo.innerHTML = "";
    FichesForfait1.forEach(element => {
        AddFicheForfaitToTable1(element.date, element.titre, element.email);
    });
}


function GetAllFichesForfaitRT1() {
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var fichesforfait1 = [];

        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());


            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "forfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        fichesforfait1.push(DataSnapshot.val());
                    })
                }
            })
        })
        AddAllFichesForfaitToTable1(fichesforfait1)
    })
}

// TRANSPORT GET

function AddFicheForfaitToTable2(nbrkm, pf, carburant) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');



    td1.innerHTML = nbrkm;
    td2.innerHTML = pf;
    td3.innerHTML = carburant;


    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);



    tbodytransport.appendChild(trow);
}

function AddAllFichesForfaitToTable2(FichesForfait2) {
    tbodytransport.innerHTML = "";
    FichesForfait2.forEach(element => {
        AddFicheForfaitToTable2(element.Km, element.puissancefiscal, element.carburant);
    });
}


function GetAllFichesForfaitRT2() {
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var fichesforfait2 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "forfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        fichesforfait2.push(DataSnapshot.val());
                    })
                }
            })


        })
        AddAllFichesForfaitToTable2(fichesforfait2)
    })
}

//NUITS GET

function AddFicheForfaitToTable3(nbrnuit) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');

    td1.innerHTML = nbrnuit;

    trow.appendChild(td1);


    tbodynuits.appendChild(trow);
}

function AddAllFichesForfaitToTable3(FichesForfait3) {
    tbodynuits.innerHTML = "";
    FichesForfait3.forEach(element => {
        AddFicheForfaitToTable3(element.nuits);
    });
}


function GetAllFichesForfaitRT3() {
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var fichesforfait3 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "forfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        fichesforfait3.push(DataSnapshot.val());
                    })
                }
            })


        })
        AddAllFichesForfaitToTable3(fichesforfait3)
    })
}

//GET REPAS

function AddFicheForfaitToTable4(nbrrepas) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('td');

    td1.innerHTML = nbrrepas;


    trow.appendChild(td1);


    tbodyrepas.appendChild(trow);
}

function AddAllFichesForfaitToTable4(FichesForfait4) {
    tbodyrepas.innerHTML = "";
    FichesForfait4.forEach(element => {
        AddFicheForfaitToTable4(element.repas);
    });
}


function GetAllFichesForfaitRT4() {
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var fichesforfait4 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "forfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        fichesforfait4.push(DataSnapshot.val());
                    })
                }
            })


        })
        AddAllFichesForfaitToTable4(fichesforfait4)
    })
}

// GET CONFIRMATION

function AddFicheForfaitToTable5(id_forfait, id_utilis) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('button');
    let td2 = document.createElement('button');

    td1.setAttribute('id', 'Validerbutton');
    td1.setAttribute('type', 'button');
    td1.setAttribute('name', 'Validerbutton');



    td1.onclick = function (e) {
        var Valide = "validé";

        if (confirm("Voulez-vous vraiment VALIDER cette fiche ?")) {

            update(ref(database, 'fiches/' + id_utilis + '/forfait/' + id_forfait), {
                status: Valide,
            })
                .then(() => {
                    alert("Fiche validée !");
                })
        } else {
            alert("Action annulé !");
        }
    }

    td1.innerHTML = ok;

    td2.setAttribute('id', 'Refuserbutton');
    td2.setAttribute('type', 'button');
    td2.setAttribute('name', 'Refuserbutton');

    td2.onclick = function (e) {
        var Refuser = "refuser";

        if (confirm("Voulez-vous vraiment REFUSER cette fiche ?")) {

            update(ref(database, 'fiches/' + id_utilis + '/forfait/' + id_forfait), {
                status: Refuser,
            })
                .then(() => {
                    alert("Fiche Refusée !");
                })
        } else {
            alert("Action annulé !");
        }
    };

    td2.innerText = suppr;


    trow.appendChild(td1);
    trow.appendChild(td2);

    tbodyconfirm.appendChild(trow);
}

function AddAllFichesForfaitToTable5(FichesForfait5) {
    tbodyconfirm.innerHTML = "";
    FichesForfait5.forEach(element => {
        AddFicheForfaitToTable5(element.id_forfait, element.id_user);
    });
}

function GetAllFichesForfaitRT5() {
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var fichesforfait5 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "forfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        fichesforfait5.push(DataSnapshot.val());
                    })
                }
            })


        })
        AddAllFichesForfaitToTable5(fichesforfait5)
    })
}

//GET STATUS

function AddFicheForfaitToTable6(status) {
    let trow = document.createElement('tr');
    let td1 = document.createElement('img');

    td1.setAttribute('id', 'statusimg');

    switch (status) {
        case "validé":
            var sourcestatus = "../../../../Images/icons/validé.png";
            td1.setAttribute('src', sourcestatus);
            td1.setAttribute('alt', 'status validé');
            td1.setAttribute('title', 'Validé');
            break;
        case "refuser":
            var sourcestatus = "../../../../Images/icons/refuser.png";
            td1.setAttribute('src', sourcestatus);
            td1.setAttribute('alt', 'status refusé');
            td1.setAttribute('title', 'Refusé');
            break;
        default:
            var sourcestatus = "../../../../Images/icons/attente.png";
            td1.setAttribute('src', sourcestatus);
            td1.setAttribute('alt', 'status en attente');
            td1.setAttribute('title', 'En Attente');
    }


    trow.appendChild(td1);

    tbodystatus.appendChild(trow);
}

function AddAllFichesForfaitToTable6(FichesForfait6) {
    tbodystatus.innerHTML = "";
    FichesForfait6.forEach(element => {
        AddFicheForfaitToTable6(element.status);
    });
}

function GetAllFichesForfaitRT6() {
    const dbref = ref(database, "fiches");

    onValue(dbref, (snapshot) => {
        var child1 = [];
        var child2 = [];
        var fichesforfait6 = [];


        snapshot.forEach(UserSnapshot => {
            child1.push(UserSnapshot.val());

            UserSnapshot.forEach(FicheKeySnapshot => {
                child2.push(FicheKeySnapshot.val());
                const userKey = FicheKeySnapshot.key;

                if (userKey == "forfait") {
                    FicheKeySnapshot.forEach(DataSnapshot => {
                        fichesforfait6.push(DataSnapshot.val());
                    })
                }
            })


        })
        AddAllFichesForfaitToTable6(fichesforfait6)
    })
}



window.onload = GetAllFichesForfaitRT1(), GetAllFichesForfaitRT2(), GetAllFichesForfaitRT3(), GetAllFichesForfaitRT4(), GetAllFichesForfaitRT5(), GetAllFichesForfaitRT6();
