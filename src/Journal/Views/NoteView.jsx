import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2'
import { ImageGallery } from '../Components/ImageGallery'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startSavingNote } from '../../store/journal/thunks'

export const NoteView = () => {
    // Creamos el estado inicial de los inputs con la info de redux => active
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);
    const dispatch = useDispatch();

    const dateToString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])
    
    useEffect(() => {
      dispatch( setActiveNote(formState))
    }, [formState])
    

    const onSaveNote = () => {
        dispatch( startSavingNote() );
    }

    useEffect(() => {
      if( messageSaved.length > 0 ) {
        console.log("saved")
        // Swal.fire('Alert', messageSaved, 'success')
      }
    }, [messageSaved])
    
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateToString}</Typography>
        </Grid>
        <Grid item>
            <Button sx={{ padding: 2}} onClick={ onSaveNote } disabled={isSaving} >
                <FontAwesomeIcon icon="fa-solid fa-bookmark" style={{ fontSize: 30, marginRight: 3}}/> Save
            </Button>
        </Grid>
        <Grid container direction='column'>
            <TextField
                type="text"
                variant='filled'
                placeholder='Insert a title'
                label='Title'
                sx={{ border: 'none', mb: 1 }}
                name='title'
                value={ title }
                onChange={ onInputChange }
            />
            <TextField
                type="text"
                variant='filled'
                fullWidth
                multiline
                placeholder='Write something about'
                label='What happend today?'
                sx={{ border: 'none', mb: 1 }}
                minRows={ 5 }
                name='body'
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>

        <ImageGallery/>
    </Grid>
  )
}
