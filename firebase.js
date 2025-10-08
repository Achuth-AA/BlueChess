// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCeRgAHzm13MlIBNfaGDuQjlvS-SI92Fc",
  authDomain: "bluechess.firebaseapp.com",
  projectId: "bluechess",
  storageBucket: "bluechess.firebasestorage.app",
  messagingSenderId: "328920033863",
  appId: "1:328920033863:web:7a4fececd59db827d9df62",
  measurementId: "G-EVV0ZKSFF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);