import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const SingInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const credentials= GoogleAuthProvider.credentialFromResult(result)

        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode, 
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName}) => {
    try {
        // Falta guardar el displayname en firebase
        console.log({ email, password, displayName})
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { displayName, email, photoURL, uid } = resp.user;
        console.log(resp)
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}