

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";



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

const accountenter = document.getElementById("pwd2");

accountenter.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {


        let email = document.getElementById("email").value;
        let prenom = document.getElementById("prenom").value;
        let nom = document.getElementById("nom").value;
        let password = document.getElementById("pwd").value;
        let password2 = document.getElementById("pwd2").value;
        let role = document.querySelector('input[name="role"]:checked').value;
        let sexe = document.querySelector('input[name="sexe"]:checked').value;


        if (password == password2) {

            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                let DateCreation = new Date();
                // ...
                set(ref(database, 'users/' + user.uid), {
                    email: email,
                    prenom: prenom,
                    nom: nom,
                    password: password,
                    passwordverif: password2,
                    role: role,
                    Created: DateCreation,
                    sexe: sexe,

                })
                    .then(() => {
                        // Data saved successfully!
                        alert("Compte créer avec succès !");
                        location.reload()

                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);

                    });

            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    alert(errorMessage);

                });
        } else {

            alert("Le Mot de passe ne correspond pas !");

        }
    }
}
);

submitaccount.addEventListener("click", function () {


    let email = document.getElementById("email").value;
    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let password = document.getElementById("pwd").value;
    let password2 = document.getElementById("pwd2").value;
    let role = document.querySelector('input[name="role"]:checked').value;
    let sexe = document.querySelector('input[name="sexe"]:checked').value;


    if (password == password2) {

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            let DateCreation = new Date();
            // ...
            set(ref(database, 'users/' + user.uid), {
                email: email,
                prenom: prenom,
                nom: nom,
                password: password,
                passwordverif: password2,
                role: role,
                created: DateCreation,
                sexe: sexe,
            })
                .then(() => {
                    // Data saved successfully!
                    alert("Compte créer avec succès !");
                    location.reload()

                })
                .catch((error) => {
                    // The write failed...
                    alert(error);

                });

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);

            });
    } else {

        alert("Le Mot de passe ne correspond pas !");

    }
});




