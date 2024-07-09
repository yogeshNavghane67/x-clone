// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-clone-1.firebaseapp.com",
  projectId: "x-next-clone-1",
  storageBucket: "x-next-clone-1.appspot.com",
  messagingSenderId: "811174164562",
  appId: "1:811174164562:web:085f3e26648bd9784a878b",
  measurementId: "G-XX89EZG6N6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
