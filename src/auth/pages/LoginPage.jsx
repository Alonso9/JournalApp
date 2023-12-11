import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <Grid 
      container 
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={ {minHeight: '100vh', backgroundColor:'primary.main', padding: 4} }
    >
      <Grid 
        item
        className='box-shadow'
        xs={3}
        sx={ {backgroundColor: 'white', padding: 3, borderRadius: 2} }
      >
        <Typography variant='h5 ' sx={ {mb: 1} }>Login</Typography>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Email'
                type='email'
                placeholder='emailExample@gmail.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Password'
                type='password'
                placeholder='Password'
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} md={6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography >Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Create an account
            </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

/*
  El grid es como un div con varias propiedaddes o atributos extras,
  el sx es un style extendent, mos permite trabajar con los styles
  pero nos permite trabajar con la propiedad que definimos en el theme,
  el xs nos da la pauta del tamano de los elementos
*/