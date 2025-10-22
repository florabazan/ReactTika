import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAK_FN4JcKR64YMMHP8niw8-EWhH1VWO8k",
  authDomain: "tika-app-2025.firebaseapp.com",
  projectId: "tika-app-2025",
  storageBucket: "tika-app-2025.appspot.com",
  messagingSenderId: "795007985593",
  appId: "1:795007985593:web:c361f8f28ddc1558963868",
  measurementId: "G-2MECFNFS15"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
