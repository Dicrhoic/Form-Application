// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB11rCMsZptrYioGUVkRiV9spyYcOcQAyk",
    authDomain: "expoapp-c2d68.firebaseapp.com",
    projectId: "expoapp-c2d68",
    storageBucket: "expoapp-c2d68.appspot.com",
    messagingSenderId: "739050153049",
    appId: "1:739050153049:web:3aa20fb67a58a74dc5fd48",
    measurementId: "G-9KKNQQZFZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;