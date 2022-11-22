

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

const pwddataEnter = document.getElementById("pwd");

pwddataEnter.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {

        let email = document.getElementById("email").value;
        let password = document.getElementById("pwd").value;

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            var lgDate = new Date().toLocaleDateString('fr-FR', {
                timeZone: 'Europe/Paris',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            update(ref(database, 'users/' + user.uid), {
                last_login: lgDate,
            })
                .then(() => {
                    // Data saved successfully!
                    window.location.href = "../../../";
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = "Mot de passe ou Email Incorrect.";
                    alert(errorMessage);

                });
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = "Veuillez saisir une adresse mail valide ! (@)";

                alert(errorCode);
            });
    }
})

submitdata.addEventListener("click", function () {

    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        var lgDate = new Date().toLocaleDateString('fr-FR', {
            timeZone: 'Europe/Paris',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        update(ref(database, 'users/' + user.uid), {
            last_login: lgDate,
        })
            .then(() => {
                // Data saved successfully!
                window.location.href = "../../../";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = "Mot de passe ou Email Incorrect.";
                alert(errorMessage);

            });
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = "Veuillez saisir une adresse mail valide ! (@)";

            alert(errorMessage);
        });

});
