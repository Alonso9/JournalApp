// import {Routes, Route} from 'react-router-dom'

import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../Journal/routes/JournalRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => {
  
  // const { status } = useSelector( state => state.auth )
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   onAuthStateChanged( FirebaseAuth, async(user) => {
  //     // Si no hay usuario mandamos el logout para actualizar o limpia el redux
  //     if(!user) return dispatch( logout() );

  //     // Caso contrario del user extraemos los datos para loggeo, podemos mandar el user dirrecto
  //     const { uid, email, displayName, photoURL } = user;
  //     dispatch( login({ uid, email, displayName, photoURL }) )
  //     // console.log(user);
  //   })
  // }, [])

  const { status } = useCheckAuth(); // El codigo comentado se fue a un customHook

  // if( status === 'checking' ){
  //   return <CheckingAuth/>
  // }

  return (
    <>
      <Routes>
      {
        (status === 'authenticated') 
        ? <Route path="/*" element={ <JournalRoutes/> } /> 
        : <Route path="/auth/*" element={ <AuthRoutes/> } />
      }

      <Route path="/*" element={ <Navigate to='auth/login' /> } />

        {/* Login y register */}
        {/* <Route path="/auth/*" element={ <AuthRoutes/> } /> */}

        {/* Resto de la App */}
        {/* <Route path="/*" element={ <JournalRoutes/> } /> */}
      </Routes>
     
    </>
  )
}


/*
 Cualquir ruta que empieza con auth llamara el componete AuthRoutes y 
 caso contrario cualquier ruta que no entre por auth, llamara al componente
 JournalRoutes
*/

/*
  Cuando este en checking mostramos el loader, ahora lanzamos un efecto (funcion), cuando
  el estado del usuario cambie, para este caso usamos onAuthStateChanged de Firebase para eso,
  eso pide nuestro Auth de Firebase (configuracion de credenciales) y un observable o nextOrObserver
  que es una funcion qeu esta emitiendo valores como los autocompletes
*/

/*
  protegemos las rutas de la sigueinte manera, si status es authenticated creamos el nodo
  de las rutas de la App Journal pero sino solo crea las tuas de Auth, para porteger las rutas,
  <Route path="/*" element={ <Navigate to='auth/login' /> } /> esa linea se usar si entras por primera vez
  y no hay status te manda al login.
*/