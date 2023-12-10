import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPages"

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <JournalPage/>} />

        <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
