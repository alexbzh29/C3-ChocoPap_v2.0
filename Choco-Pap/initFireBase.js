// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoRzG44LaVthmTHpLD_Pady4YPoHuf1Xs",
  authDomain: "choco-pap-6ab12.firebaseapp.com",
  projectId: "choco-pap-6ab12",
  storageBucket: "choco-pap-6ab12.appspot.com",
  messagingSenderId: "130279111398",
  appId: "1:130279111398:web:b6d74365d93b7ed2f35927",
  measurementId: "G-456MYJV2H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);