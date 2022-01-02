// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_S4ePIIllQ8qud8ncfYy0jAQ4gLRZbBE",
    authDomain: "desoapp-c2023.firebaseapp.com",
    databaseURL: "https://desoapp-c2023-default-rtdb.firebaseio.com",
    projectId: "desoapp-c2023",
    storageBucket: "desoapp-c2023.appspot.com",
    messagingSenderId: "675796519654",
    appId: "1:675796519654:web:586d753c7c1b04b6ea0927",
    measurementId: "G-SRDKHVXDFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);