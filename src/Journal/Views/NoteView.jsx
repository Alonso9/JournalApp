import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../Components/ImageGallery'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'> Jaunary, 28 of 2024</Typography>
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
            />
            <TextField
                type="text"
                variant='filled'
                fullWidth
                multiline
                placeholder='What happend today?'
                // label='Title'
                sx={{ border: 'none', mb: 1 }}
                minRows={ 5 }
            />
        </Grid>

        <ImageGallery/>
    </Grid>
  )
}
