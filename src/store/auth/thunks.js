import { SingInWithGoogle, loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}

export const startGoogleSingIn = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await SingInWithGoogle()
        // console.log(result)
        if( !result.ok ){
            return dispatch( logout( result.errorMessage ) )
        }else {
            delete result.ok
            // console.log(result)
            dispatch( login( result ) )
        }
       
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) =>{
    return async( dispatch ) => {
        try {
            dispatch( checkingCredentials() )
            // debugger
            const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName})
            // console.log({email, password, displayName});
            // console.log({ ok, uid, photoURL, errorMessage })
            if(!ok) return dispatch( logout({errorMessage}) )
            dispatch( login(uid, displayName, email, photoURL))
            
        } catch (error) {
            console.log(error);
            return  { ok: false, errorMessage: error.message }
            
        }
    }

}

export const startLoginWithEmailPassword = ({email, password, displayName}) => {
    return  async( dispatch ) => {
        try {
            dispatch( checkingCredentials() )
            // debugger
            const result = await loginWithEmailPassword({email, password})
            // console.log(result);
            // console.log({ ok, uid, photoURL, errorMessage })
            if(!result.ok) return dispatch( logout(result) )
            dispatch( login(result))
        } catch (error) {
            console.log(error.message);
            return  { ok: false, errorMessage: error.message }
        }
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        try {
            await logoutFirebase();
            dispatch( logout({ errorMessage: null }) )
        } catch (error) {
            console.log(error);
        }
        

    }
}