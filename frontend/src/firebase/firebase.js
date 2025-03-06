// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnIFVb7f-pQBAH-sYaN5ha5H-XkiviEpg",
  authDomain: "mathema-dev-2e6c1.firebaseapp.com",
  projectId: "mathema-dev-2e6c1",
  storageBucket: "mathema-dev-2e6c1.firebasestorage.app",
  messagingSenderId: "572460906516",
  appId: "1:572460906516:web:bc40a94c83664b7c4a4f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };