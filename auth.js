import { firebaseConfig } from './config.js';
import { initializeApp, getApp, getApps } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup
} from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js';

// Singleton app/auth
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export function onAuth(cb){
  return onAuthStateChanged(auth, cb);
}

export function currentUser(){
  return auth.currentUser;
}

export async function signInEmail(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signUpEmail(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function signOutUser(){
  return signOut(auth);
}

export async function signInGoogle(){
  return signInWithPopup(auth, googleProvider);
}
