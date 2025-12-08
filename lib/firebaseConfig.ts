// lib/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDojapgfYTLyZ7cot3xV-qj7vNTUk_6D3M",
  authDomain: "ferrolupa-comentarios.firebaseapp.com",
  projectId: "ferrolupa-comentarios",
  storageBucket: "ferrolupa-comentarios.firebasestorage.app",
  messagingSenderId: "1007485524898",
  appId: "1:1007485524898:web:6fc4c8ce71fe3dd46ff0fb",
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Servicios
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Funciones de login/logout
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
