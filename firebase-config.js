import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFE7LD0e6BT4DwC9njFVsGswRLX_wroao",
  authDomain: "gaylord-99e85.firebaseapp.com",
  projectId: "gaylord-99e85",
  storageBucket: "gaylord-99e85.firebasestorage.app",
  messagingSenderId: "993005314466",
  appId: "1:993005314466:web:5bbd7dd3bfa4a81e7b12fb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
