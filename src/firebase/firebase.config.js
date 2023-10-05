// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvMS6aTAjnnzQry35jxTu_V-aCQFLMBYs",
  authDomain: "news-resources-auth.firebaseapp.com",
  projectId: "news-resources-auth",
  storageBucket: "news-resources-auth.appspot.com",
  messagingSenderId: "123585738654",
  appId: "1:123585738654:web:5422a5254d80130bdec88f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)