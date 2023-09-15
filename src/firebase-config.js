import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASN4oD1G6nYprBjRjipeYGfBipuQe5d5E",
  authDomain: "chat-up-cbd85.firebaseapp.com",
  projectId: "chat-up-cbd85",
  storageBucket: "chat-up-cbd85.appspot.com",
  messagingSenderId: "20968043930",
  appId: "1:20968043930:web:0f2dcc6536a1cf491ab623",
  measurementId: "G-5Z418QG2PQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();