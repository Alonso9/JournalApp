// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPIstXNP3JSUlDAkOCdJrZMeoBa7O0XBc",
  authDomain: "react-cursos-5e13a.firebaseapp.com",
  projectId: "react-cursos-5e13a",
  storageBucket: "react-cursos-5e13a.appspot.com",
  messagingSenderId: "236893422453",
  appId: "1:236893422453:web:655f2c7072fe63f34b493c",
  measurementId: "G-L49CVNKK19"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp)