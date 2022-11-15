

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

import { getDatabase, set, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";



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



onAuthStateChanged(auth, (user) => {
    
    if (user) {
        const RoleData = ref(database, 'users/' + user.uid + '/role');
        onValue(RoleData, (snapshotRole) => {
            const Role = snapshotRole.val();

            if (Role == "admin") {
                console.log("Admin = True");

                const NameData = ref(database, 'users/' + user.uid + '/prenom');
                onValue(NameData, (snapshotName) => {
                    const Name = snapshotName.val();
                    console.log(Name);

                    document.getElementById("AdminName").innerHTML = Name;
                })


            }
            else {
                alert("Accès Refusé.")
                window.location.href = "../../../../";
            }
        })

    } else {
        console.log("Aucun Utilisateur connecté!");
        Deconnexion();
    }
}
);

function Deconnexion() {

    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "../../../../";
    }).catch((error) => {
        // An error happened.
        alert(error);
    });

}
