// configFirebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signOut  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Importer getFirestore pour Firestore
import { getStorage } from 'firebase/storage';  
import { getDatabase } from 'firebase/database'; // Importer getDatabase pour la base de données en temps réel

const firebaseConfig = {
  apiKey: "AIzaSyBt629C9YyVqpm3yG4ro8MskgMqRY37hgI",
  authDomain: "login-e6dc3.firebaseapp.com",
  projectId: "login-e6dc3",
  storageBucket: "login-e6dc3.appspot.com",
  messagingSenderId: "922795254650",
  appId: "1:922795254650:web:08defb0233ed6be7f9acc3",
  measurementId: "G-V0TXK7XRK5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); // Utiliser getFirestore pour Firestore
const storage = getStorage(app);
const database = getDatabase(app); // Utiliser getDatabase pour la base de données en temps réel

export { auth, firestore, database, storage, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signOut };
