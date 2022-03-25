// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjulPHwq1D3QHWPuZ0kuTMBu3wVpcKLu8",
    authDomain: "scotland-holiday.firebaseapp.com",
    projectId: "scotland-holiday",
    storageBucket: "scotland-holiday.appspot.com",
    messagingSenderId: "245421947129",
    appId: "1:245421947129:web:b399f24e67c8dd42904a28",
    measurementId: "G-S0C8J56H4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();


function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}

//signOut

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);

    } else {
        alert("No Active user Found")
    }
})
