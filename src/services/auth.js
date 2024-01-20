// Import the functions you need from the SDKs you need
import { auth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const signup = async(email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User registered:", user);

        return user;
    } catch (error) {
        throw(error);
    }
}

export const login = async (email, password) => {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed in:", user);
        return user;
    } catch (error) {
        console.log(error.errorMessage);
        throw error;
    }
}
