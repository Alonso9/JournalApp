import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { startLoadingnotes } from "../store/journal/thunks";

export const useCheckAuth = () => {
  const { status } = useSelector( state => state.auth )
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async(user) => {
      // Si no hay usuario mandamos el logout para actualizar o limpia el redux
      if(!user) return dispatch( logout() );

      // Caso contrario del user extraemos los datos para loggeo, podemos mandar el user dirrecto
      const { uid, email, displayName, photoURL } = user;
      dispatch( login({ uid, email, displayName, photoURL }) )
      dispatch(startLoadingnotes()) // En este punto sabemos que el usuario se loggeo y llamamos todas sus notas
      // console.log(user);
    })
  }, [])
  
  return {
    status
  }

}
