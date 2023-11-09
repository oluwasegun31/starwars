import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDreez-rOZst1cBlf0MVcQ05KdZ7fzHDOw",
    authDomain: "starwars-ad028.firebaseapp.com",
    projectId: "starwars-ad028",
    storageBucket: "starwars-ad028.appspot.com",
    messagingSenderId: "45617581945",
    appId: "1:45617581945:web:d9eaa88444f983e3bfe9a8",
    measurementId: "G-FJZ97X2SWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// authentication
const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app)

export { auth, storage, db }
