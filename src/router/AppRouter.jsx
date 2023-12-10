// import {Routes, Route} from 'react-router-dom'

import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../Journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Login y register */}
        <Route path="/auth/*" element={ <AuthRoutes/> } />

        {/* Resto de la App */}
        <Route path="/*" element={ <JournalRoutes/> } />
      </Routes>
     
    </>
  )
}


/*
 Cualquir ruta que empieza con auth llamara el componete AuthRoutes y 
 caso contrario cualquier ruta que no entre por auth, llamara al componente
 JournalRoutes
*/