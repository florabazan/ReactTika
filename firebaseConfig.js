// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK_FN4JcKR64YMMHP8niw8-EWhH1VWO8k",
  authDomain: "tika-app-2025.firebaseapp.com",
  projectId: "tika-app-2025",
  storageBucket: "tika-app-2025.firebasestorage.app",
  messagingSenderId: "795007985593",
  appId: "1:795007985593:web:c361f8f28ddc1558963868",
  measurementId: "G-2MECFNFS15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);