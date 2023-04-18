// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhf0inXrMAoeS1UnzyJsgzshUqi6uRS3A",
  authDomain: "email-password-auth-f96f2.firebaseapp.com",
  projectId: "email-password-auth-f96f2",
  storageBucket: "email-password-auth-f96f2.appspot.com",
  messagingSenderId: "583036496561",
  appId: "1:583036496561:web:9b7384cfad707c464b9090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;