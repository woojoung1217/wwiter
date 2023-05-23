import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC7sn2EttifYD4Bu_EJaXU1LoHLAGpySNw",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const authService = getAuth(firebase);
export const dbService = getFirestore();
export const storageService = getStorage();

// --------------------------
// const firebaseConfig = {
//   apiKey: "AIzaSyC7sn2EttifYD4Bu_EJaXU1LoHLAGpySNw",
//   authDomain: "wwitter-e654f.firebaseapp.com",
//   projectId: "wwitter-e654f",
//   storageBucket: "wwitter-e654f.appspot.com",
//   messagingSenderId: "437517540430",
//   appId: "1:437517540430:web:d8f93837f4c2c7a37a771f",
// };
