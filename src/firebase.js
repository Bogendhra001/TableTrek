// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY3Lld-xTxcVm2akXSg-cg9HiXQibc400",
  authDomain: "tabletrek-9b9b8.firebaseapp.com",
  projectId: "tabletrek-9b9b8",
  storageBucket: "tabletrek-9b9b8.appspot.com",
  messagingSenderId: "457259835090",
  appId: "1:457259835090:web:3a8e9b6b70959a0c55570b",
  measurementId: "G-E34PZTDVX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);