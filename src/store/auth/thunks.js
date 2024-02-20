import { SingInWithGoogle } from "../../firebase/provider"
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