import { SingInWithGoogle, registerUserWithEmailPassword } from "../../firebase/provider"
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
        dispatch( checkingCredentials() )
        const result = await registerUserWithEmailPassword({email, password, displayName})
        console.log(result)
    }

}