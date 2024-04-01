import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async(uid = '') => {
    if(!uid) throw new Error('The UID user does not exist');

    const collectionRef = collection(FirebaseDB, `${uid}/Journal/Notes`);
    const docs = await getDocs(collectionRef);

    let notes = [];
    docs.forEach(doc => {
        // console.log(doc.data());
        notes.push({id: doc.id, ...doc.data()});
    });

    console.log(notes)
    return notes;
}