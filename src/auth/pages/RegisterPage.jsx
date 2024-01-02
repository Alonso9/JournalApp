import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import {Link as RouterLink} from 'react-router-dom'
// import Google from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
          <Grid container>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Full name'
                type='text'
                placeholder='Jhon Doe'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Email'
                type='email'
                placeholder='email@email.com'
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
              <Grid item xs={12} md={12}>
                <Button variant='contained' fullWidth>
                  Create an account
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
            <Typography variant='h5 ' sx={ {mr: 1} }>Do you already have an account? </Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Login
            </Link>
            </Grid>
          </Grid>
      </form>
    </AuthLayout>
  )
}
