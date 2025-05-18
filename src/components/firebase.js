import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZl_9Laycoxl9X1PQK4e4JPQA0FaSZtmk",
  authDomain: "newsletter-49e03.firebaseapp.com",
  projectId: "newsletter-49e03",
  storageBucket: "newsletter-49e03.firebasestorage.app",
  messagingSenderId: "689133977015",
  appId: "1:689133977015:web:d06801c43703c43c3b7c32",
  measurementId: "G-H612543ELQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }; 