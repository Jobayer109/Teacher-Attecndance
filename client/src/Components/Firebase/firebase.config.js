// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRvKJLKnT4Ml6cOhDnwbkt4U6ZLLHeOas",
  authDomain: "teachers-attendance-f884d.firebaseapp.com",
  projectId: "teachers-attendance-f884d",
  storageBucket: "teachers-attendance-f884d.appspot.com",
  messagingSenderId: "1070464185284",
  appId: "1:1070464185284:web:9cee33b620db977f8eaa91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
