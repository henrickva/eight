import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCcgwNLpTJ4robKDhWn6FbA3uWCGcSfm2g",
    authDomain: "eight-15b8b.firebaseapp.com",
    projectId: "eight-15b8b",
    storageBucket: "eight-15b8b.appspot.com",
    messagingSenderId: "43058562379",
    appId: "1:43058562379:web:1fb8e93b9f7bd23cc854ce",
    measurementId: "G-XLC3MVKDPX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const authentic = getAuth()

export default db