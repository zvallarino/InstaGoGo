// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuzRMlvX_lHC6k6vicw9Pq9bFRQ4GJ_Yw",
  authDomain: "instae-1058a.firebaseapp.com",
  projectId: "instae-1058a",
  storageBucket: "instae-1058a.appspot.com",
  messagingSenderId: "30540628753",
  appId: "1:30540628753:web:e4bd9a4a145cf1198ec2b0",
  measurementId: "G-T8G62KT9T5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
