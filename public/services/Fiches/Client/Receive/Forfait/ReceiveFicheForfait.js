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
var tbodyinfo = document.getElementById('tbody1');
var tbodytransport = document.getElementById('tbody2');
var tbodynuits = document.getElementById('tbody3');
var tbodyrepas = document.getElementById('tbody4');
var tbdodystatus = document.getElementById('tbody5');

onAuthStateChanged(auth, (user) => {
    if (user) {

        const userID = user.uid;
        console.log(userID);

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
            const dbref = ref(database, "fiches/" + userID + "/forfait");

            onValue(dbref, (snapshot) => {
                var fichesforfait1 = [];

                snapshot.forEach(DataSnapshot => {
                    fichesforfait1.push(DataSnapshot.val());
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
            const dbref = ref(database, "fiches/" + userID + "/forfait");

            onValue(dbref, (snapshot) => {
                var fichesforfait2 = [];

                snapshot.forEach(DataSnapshot => {
                    fichesforfait2.push(DataSnapshot.val());
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
            const dbref = ref(database, "fiches/" + userID + "/forfait");

            onValue(dbref, (snapshot) => {
                var fichesforfait3 = [];

                snapshot.forEach(DataSnapshot => {
                    fichesforfait3.push(DataSnapshot.val());
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
            const dbref = ref(database, "fiches/" + userID + "/forfait");

            onValue(dbref, (snapshot) => {
                var fichesforfait4 = [];

                snapshot.forEach(DataSnapshot => {
                    fichesforfait4.push(DataSnapshot.val());
                })

                AddAllFichesForfaitToTable4(fichesforfait4)
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

            tbdodystatus.appendChild(trow);
        }

        function AddAllFichesForfaitToTable5(FichesForfait5) {
            tbdodystatus.innerHTML = "";
            FichesForfait5.forEach(element => {
                AddFicheForfaitToTable6(element.status);
            });
        }

        function GetAllFichesForfaitRT5() {
            const dbref = ref(database, "fiches/" + userID + "/forfait");

            onValue(dbref, (snapshot) => {
                var fichesforfait5 = [];

                snapshot.forEach(DataSnapshot => {
                    fichesforfait5.push(DataSnapshot.val());
                })
                
                AddAllFichesForfaitToTable5(fichesforfait5)
            })
        }



        window.onload = GetAllFichesForfaitRT1(), GetAllFichesForfaitRT2(), GetAllFichesForfaitRT3(), GetAllFichesForfaitRT4(), GetAllFichesForfaitRT5();

    } else {

    }
});

