import React, { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import {Link as RouterLink} from 'react-router-dom'
// import Google from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks'
import { useDispatch } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'Please use a valid email @.'],
  // email: [ (value) => value.length >= 1, 'The email is required.'],
  password: [ (value) => value.length >= 8, 'The password must be 8 characters at less.'],
  displayName: [ (value) => value.length >= 1, 'The name is required.'],
}

export const RegisterPage = () => {
  const [formSubmitted, setformSubmitted] = useState(false)
  const dispatch = useDispatch();

  const {displayName, email, password, onInputChange, onResetForm, 
    formState, isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations)
  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true) // Hasta wue se mande le form se evaluara los inputs
    if(!isFormValid)return
    dispatch(startCreatingUserWithEmailPassword(formState))    
  }


  return (
    <AuthLayout title='Register'>
      <h1>Valid form: { isFormValid ? '👍🏿' : '👎🏿' }</h1>
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Full name'
                type='text'
                placeholder='Jhon Doe'
                fullWidth
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Email'
                type='email'
                placeholder='email@email.com'
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Password'
                type='password'
                placeholder='Password'
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
              />
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} md={12}>
                <Button variant='contained' fullWidth type='submit'> 
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
