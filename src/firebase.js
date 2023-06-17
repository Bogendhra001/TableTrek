// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmcLDvhZoIpfEWzoKuoOfWB9FtJzYQL4Q",
  authDomain: "tabletrek-d34d2.firebaseapp.com",
  projectId: "tabletrek-d34d2",
  storageBucket: "tabletrek-d34d2.appspot.com",
  messagingSenderId: "852435372650",
  appId: "1:852435372650:web:f2904ce4bd6293a1ee1813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);