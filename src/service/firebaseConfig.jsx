// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDA_-8A18Sd37dAUSOfs__nkzR2_ymENI",
  authDomain: "ai-app-abd9b.firebaseapp.com",
  projectId: "ai-app-abd9b",
  storageBucket: "ai-app-abd9b.firebasestorage.app",
  messagingSenderId: "543122410865",
  appId: "1:543122410865:web:a092b7106efc9e35f63ad0",
  measurementId: "G-JCLTPMMM9P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
