import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 
import { app } from '../config/firebaseConfig';
export const add = async (barangay, date, total, gender) => {
    const db = getFirestore(app);
    try {
        const docRef = await addDoc(collection(db, "services"), {
            barangay: barangay,
            date: date,
            total: total,
            gender: gender
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
      
}

export const read = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "services"));
    return  querySnapshot;
}