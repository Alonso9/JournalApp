import { IconButton, Typography } from "@mui/material"
import { JournaLayout } from "../layout/JournaLayout"
import { NoteView, NothingSelectedView } from "../Views";
import { ImageGallery } from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const drawerWith = 240;

export const JournalPage = () => {
  return (
    <>
    <JournaLayout>
      <NothingSelectedView/>
      {/* <NoteView/> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { opacity: 0.9, backgroundColor: 'error.main' },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </IconButton>
      
    </JournaLayout>
    </>
  )
}
