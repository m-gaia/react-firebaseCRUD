// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//servicio de firebase para bbdd no relacional
import {getFirestore} from "@firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJeDBLgu2LW7lV8_8SHp-GpV30HRz2ME",
  authDomain: "cac-f8fd8.firebaseapp.com",
  projectId: "cac-f8fd8",
  storageBucket: "cac-f8fd8.appspot.com",
  messagingSenderId: "730631304032",
  appId: "1:730631304032:web:37a1bc5b8e5b7ac56ca405"
};

// Initialize Firebase - conecta mi app con firebase 
const app = initializeApp(firebaseConfig);
// para conectarme a la bbdd a la funcion le paso como parametros las credenciales 
//la variable db la usare en los componentes
export const db = getFirestore(app)