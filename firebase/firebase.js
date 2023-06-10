import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, reactNativeLocalPersistence } from "firebase/auth";
import 'firebase/auth';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
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


const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(app);

export default app;