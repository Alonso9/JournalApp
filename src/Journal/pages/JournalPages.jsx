import { IconButton, Typography } from "@mui/material"
import { JournaLayout } from "../layout/JournaLayout"
import { NoteView, NothingSelectedView } from "../Views";
import { ImageGallery } from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

const drawerWith = 240;

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, messageSaved, active } = useSelector( state => state.journal)
  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }
  return (
    <>
    <JournaLayout>

      {
        active == null ? <NothingSelectedView/> : <NoteView/>
      }

      <IconButton
        disabled={isSaving}
        onClick={ onClickNewNote }
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
