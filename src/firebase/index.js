// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
  authDomain: process.env.VUE_APP_GOOGLE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_GOOGLE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_GOOGLE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_GOOGLE_APP_ID,
  measurementId: process.env.VUE_APP_GOOGLE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export {
  app,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  provider,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
};
