import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCPskPqNNoNyu6rWFh9ZRlWEqGYLn1MKe4",
  authDomain: "chat-3-256e4.firebaseapp.com",
  projectId: "chat-3-256e4",
  storageBucket: "chat-3-256e4.appspot.com",
  messagingSenderId: "751834420879",
  appId: "1:751834420879:web:f781f87943a19749bb42fa",
  measurementId: "G-X4D02HE83N"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()