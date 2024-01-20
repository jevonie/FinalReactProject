import * as firebase from 'firebase/app';
import { getAuth,initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { ReactNativeAsyncStorage, getReactNativePersistence } from '@react-native-async-storage/async-storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCNogVF8vuRZHyyOuC2tBE5TgO2RuggzyM",
  authDomain: "klarexnaserbisyo.firebaseapp.com",
  databaseURL: "https://klarexnaserbisyo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "klarexnaserbisyo",
  storageBucket: "klarexnaserbisyo.appspot.com",
  messagingSenderId: "983814985939",
  appId: "1:983814985939:web:0c943992288913a15d5c26",
  measurementId: "G-80ZLD2KDQC"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export default app;