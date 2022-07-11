import firebase from "firebase/app"
import {getAuth} from "firebase/auth"
import "firebase/database"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB0m7O4xlgJ5DHd2rv0JSLvmfHkDKiKWa8",
  authDomain: "community4you-ef56b.firebaseapp.com",
  databaseURL: "https://community4you-ef56b-default-rtdb.firebaseio.com",
  projectId: "community4you-ef56b",
  storageBucket: "community4you-ef56b.appspot.com",
  messagingSenderId: "138310725109",
  appId: "1:138310725109:web:8b443e84278b8b862104bc"
};
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);