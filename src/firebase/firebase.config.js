// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWSqzU3LRIY9Nv3EFC-GVIi9VdDtjK8U0",
  authDomain: "ema-jhon-auth-crud.firebaseapp.com",
  projectId: "ema-jhon-auth-crud",
  storageBucket: "ema-jhon-auth-crud.appspot.com",
  messagingSenderId: "951351046480",
  appId: "1:951351046480:web:32952fdc86c83951b7fc55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;