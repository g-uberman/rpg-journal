import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyCd2116jEyiuHeynPawcGJ4saHN3fCh6dQ",
    authDomain: "rpg-journal-57650.firebaseapp.com",
    projectId: "rpg-journal-57650",
    storageBucket: "rpg-journal-57650.appspot.com",
    messagingSenderId: "149626978587",
    appId: "1:149626978587:web:5fc1b832491ce3ad0f93be"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
