import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp({
    apiKey: "AIzaSyCE-d0jJ13IPU3WdmBbEhWqYbvPKcf7pJc",
    authDomain: "treeeest-solutions.firebaseapp.com",
    projectId: "treeeest-solutions",
    storageBucket: "treeeest-solutions.appspot.com",
    messagingSenderId: "692426818016",
    appId: "1:692426818016:web:2354a11e148c95212eeb85",
    measurementId: "G-RR0D3JBD29"
});

export const db = getFirestore(app);
export const analytics = getAnalytics(app);
