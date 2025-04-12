// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // 👈 Importa esto

const firebaseConfig = {
  apiKey: "AIzaSyCfMs8QwfuheepqRjfJFvGXIVDZ9kp8f0E",
  authDomain: "tienda-virtual-561af.firebaseapp.com",
  databaseURL: "https://tienda-virtual-561af-default-rtdb.firebaseio.com",
  projectId: "tienda-virtual-561af",
  storageBucket: "tienda-virtual-561af.appspot.com", // 👈 Corregí esto: `.app` no es válido
  messagingSenderId: "487905857551",
  appId: "1:487905857551:web:8c6e67bf0f19cb334c537a",
  measurementId: "G-J5WTJL872L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // 👈 Instancia de Storage

export { db, auth, storage };
