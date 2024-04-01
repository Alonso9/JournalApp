import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { ImageGallery } from '../Components/ImageGallery'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'

export const NoteView = () => {
    // Creamos el estado inicial de los inputs con la info de redux => active
    const { active:note } = useSelector( state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateToString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])
    

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateToString}</Typography>
        </Grid>
        <Grid item>
            <Button sx={{ padding: 2}}>
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
