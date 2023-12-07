
import {getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz0n1sqd_IX0f-bsE9AKN04eP76gZfpCU",
  authDomain: "assn-student-details-app.firebaseapp.com",
  projectId: "assn-student-details-app",
  storageBucket: "assn-student-details-app.appspot.com",
  messagingSenderId: "389620433335",
  appId: "1:389620433335:web:5d21aa135360d9e795e832"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const storage = getStorage(firebaseApp);

export {auth, storage, signInWithPhoneNumber, firebaseApp, RecaptchaVerifier };

export default db;