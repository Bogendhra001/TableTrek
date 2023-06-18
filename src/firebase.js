// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCY3Lld-xTxcVm2akXSg-cg9HiXQibc400",
//   authDomain: "tabletrek-9b9b8.firebaseapp.com",
//   projectId: "tabletrek-9b9b8",
//   storageBucket: "tabletrek-9b9b8.appspot.com",
//   messagingSenderId: "457259835090",
//   appId: "1:457259835090:web:3a8e9b6b70959a0c55570b",
//   measurementId: "G-E34PZTDVX7"
// };

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

export const auth = getAuth(app);
export const db = getFirestore(app);
