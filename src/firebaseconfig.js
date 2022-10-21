// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDwdy6VQ1F_BVMmX3KSvW2yI4mNo_Vddl0",
  authDomain: "social-fix.firebaseapp.com",
  projectId: "social-fix",
  storageBucket: "social-fix.appspot.com",
  messagingSenderId: "805027540239",
  appId: "1:805027540239:web:6af8fb62c9c208ba72a27a",
  measurementId: "G-N29XDSJRF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);