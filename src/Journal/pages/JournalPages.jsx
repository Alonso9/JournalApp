import { Typography } from "@mui/material"
import { JournaLayout } from "../layout/JournaLayout"
import { NoteView, NothingSelectedView } from "../Views";

const drawerWith = 240;

export const JournalPage = () => {
  return (
    <>
    <JournaLayout>
      {/* <NothingSelectedView/> */}
      <NoteView/>
    </JournaLayout>
    </>
  )
}
