// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjaVXf5f-O7Ao46me8U5v7PE4s98aa3bU",
  authDomain: "project-x-1d9e6.firebaseapp.com",
  projectId: "project-x-1d9e6",
  storageBucket: "project-x-1d9e6.appspot.com",
  messagingSenderId: "888412838530",
  appId: "1:888412838530:web:7f38fb770995e8f280f29b",
  databaseURL:
    "https://project-x-1d9e6-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }
export default app;
