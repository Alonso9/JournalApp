import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch(savingNewNote());
        // console.log("start");
        // console.log(getState()); // Con el getState() obtenemos los datos del Redux
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(), 
        }
        // Creamos la referencia de donde aueremos insertar en Firebase
        const newDoc = doc( collection( FirebaseDB, `${uid}/Journal/Notes` ) );
        const resp = await setDoc( newDoc, newNote );

        // console.log(newDoc);

        newNote.id= newDoc.id;
        dispatch( addNewEmptyNote(newNote) );
        dispatch( setActiveNote(newNote) );
    }
}

export const startLoadingnotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;

        if(!uid) throw new Error('The UID user does not exist');

        const notes = await loadNotes(uid);
        // console.log({notas : notes})
        dispatch(setNotes(notes))
        // console.log(uid);
    }
}

export const startSavingNote = () => {
    return async( dispatch, getState ) => {
        dispatch( setSaving() )
        const { uid } = getState().auth;
        const { active:note } = getState().journal; // Aqui guardamos la nota activa con todos sus valores

        if(!uid) throw new Error('The UID user does not exist');

        const noteToFireStore = { ...note }
        delete noteToFireStore.id; // Eleminamos la propiedad del objeto, para guardar la nueva nota sin el id

        // console.log(noteToFireStore)
        const docRef = doc( FirebaseDB, `${uid}/Journal/Notes/${note.id}`);
        // merge es una union que si hay campos que se mandan aqui que son nuevos, los qwue ya existen en Firestore se conserven
        await setDoc( docRef, noteToFireStore, { merge: true } ) 
        noteToFireStore.id = note.id;
        dispatch( updateNote(noteToFireStore) )
    }

}
 
/*
    Nota si da el error 403, es porque la App o sitio no tiene permisos, en nuestro
    Firestore Database en Rules cambiamos "allow read, write: if false;" por "allow read, write: if request.auth != null;"
    en esa sentencia le decimos que solo peticiones que esten autenticadas
*/