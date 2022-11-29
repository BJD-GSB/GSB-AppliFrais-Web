
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
var tbodyinfo = document.getElementById('tbody1');
var tbodyelement1 = document.getElementById('tbody2');
var tbodyelement2 = document.getElementById('tbody3');
var tbodyelement3 = document.getElementById('tbody4');
var tbdodystatus = document.getElementById('tbody5');

onAuthStateChanged(auth, (user) => {
    if (user) {

        const userID = user.uid;
        console.log(userID);

        //INFO GET

        function AddFicheHorsForfaitToTable1(date, title, email) {
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

        function AddAllFichesHorsForfaitToTable1(FichesHorsForfait1) {
            NbrTickets = 0;
            tbodyinfo.innerHTML = "";
            FichesHorsForfait1.forEach(element => {
                AddFicheHorsForfaitToTable1(element.date, element.titre, element.email);
            });
        }


        function GetAllFichesHorsForfaitRT1() {
            const dbref = ref(database, "fiches/" + userID + "/horsforfait");

            onValue(dbref, (snapshot) => {
                var FichesHorsForfait1 = [];

                snapshot.forEach(childSnapshot => {
                    FichesHorsForfait1.push(childSnapshot.val());
                })
                AddAllFichesHorsForfaitToTable1(FichesHorsForfait1)
            })
        }

        // TRANSPORT GET

        function AddFicheHorsForfaitToTable2(element1, prix1) {
            let trow = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');

            td1.innerHTML = element1;
            td2.innerHTML = prix1;


            trow.appendChild(td1);
            trow.appendChild(td2);

            tbodyelement1.appendChild(trow);
        }

        function AddAllFichesForfaitToTable2(FichesHorsForfait2) {
            tbodyelement1.innerHTML = "";
            FichesHorsForfait2.forEach(element => {
                AddFicheHorsForfaitToTable2(element.element1, element.prix1);
            });
        }


        function GetAllFichesHorsForfaitRT2() {
            const dbref = ref(database, "fiches/" + userID + "/horsforfait");

            onValue(dbref, (snapshot) => {
                var fichesforfait2 = [];

                snapshot.forEach(childSnapshot => {
                    fichesforfait2.push(childSnapshot.val());
                })
                AddAllFichesForfaitToTable2(fichesforfait2)
            })
        }

        //NUITS GET

        function AddFicheHorsForfaitToTable3(element2, prix2) {
            let trow = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');

            td1.innerHTML = element2;
            td2.innerHTML = prix2;


            trow.appendChild(td1);
            trow.appendChild(td2);

            tbodyelement2.appendChild(trow);
        }

        function AddAllFichesForfaitToTable3(FichesHorsForfait3) {
            tbodyelement2.innerHTML = "";
            FichesHorsForfait3.forEach(element => {
                AddFicheHorsForfaitToTable3(element.element2, element.prix2);
            });
        }


        function GetAllFichesHorsForfaitRT3() {
            const dbref = ref(database, "fiches/" + userID + "/horsforfait");

            onValue(dbref, (snapshot) => {
                var fichesforfait3 = [];

                snapshot.forEach(childSnapshot => {
                    fichesforfait3.push(childSnapshot.val());
                })
                AddAllFichesForfaitToTable3(fichesforfait3)
            })
        }

        //GET REPAS

        function AddFicheHorsForfaitToTable4(element3, prix3) {
            let trow = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');

            td1.innerHTML = element3;
            td2.innerHTML = prix3;


            trow.appendChild(td1);
            trow.appendChild(td2);

            tbodyelement3.appendChild(trow);
        }

        function AddAllFichesHorsForfaitToTable4(FichesHorsForfait4) {
            tbodyelement3.innerHTML = "";
            FichesHorsForfait4.forEach(element => {
                AddFicheHorsForfaitToTable4(element.element3, element.prix3);
            });
        }


        function GetAllFichesHorsForfaitRT4() {
            const dbref = ref(database, "fiches/" + userID + "/horsforfait");

            onValue(dbref, (snapshot) => {
                var ficheshorsforfait4 = [];

                snapshot.forEach(childSnapshot => {
                    ficheshorsforfait4.push(childSnapshot.val());
                })
                AddAllFichesHorsForfaitToTable4(ficheshorsforfait4)
            })
        }

        //GET STATUS

        function AddFicheHorsForfaitToTable6(status) {
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

        function AddAllFichesHorsForfaitToTable6(FicheshorsForfait6) {
            tbdodystatus.innerHTML = "";
            FicheshorsForfait6.forEach(element => {
                AddFicheHorsForfaitToTable6(element.status);
            });
        }

        function GetAllFichesHorsForfaitRT6() {
            const dbref = ref(database, "fiches/" + userID + "/horsforfait");

            onValue(dbref, (snapshot) => {
                var FicheshorsForfait6 = [];

                snapshot.forEach(childSnapshot => {
                    FicheshorsForfait6.push(childSnapshot.val());
                })
                AddAllFichesHorsForfaitToTable6(FicheshorsForfait6)
            })
        }



        window.onload = GetAllFichesHorsForfaitRT1(), GetAllFichesHorsForfaitRT2(), GetAllFichesHorsForfaitRT3(), GetAllFichesHorsForfaitRT4(), GetAllFichesHorsForfaitRT6();



    } else {
        alert("Il sembleraît que vous soyez pas connecté... Problème rencontrée !");
    }
});

