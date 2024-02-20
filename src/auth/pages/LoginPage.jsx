import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth'

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector( state => state.auth)
  const isAuthenticating = useMemo( () => status === 'checking', [status])
  const { email, password, onInputChange} = useForm({
    email: 'ramonalonso_giron@ucol.mx',
    password: '123456',
  })

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({email, password})
    dispatch( checkingAuthentication() )
  }

  const onGoogleSingIn = (  ) => {
    console.log('Google')
    dispatch( startGoogleSingIn() )
  }
  return (
    <AuthLayout title='Login'>
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Email'
                type='email'
                placeholder='emailExample@gmail.com'
                fullWidth
                name ="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{marginTop:2}}>
              <TextField
                label='Password'
                type='password'
                placeholder='Password'
                fullWidth
                name ="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} md={6}>
                <Button disabled={ isAuthenticating } type='submit' variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button disabled={ isAuthenticating } variant='contained' fullWidth onClick={onGoogleSingIn}>
                  {/* <Google /> */}
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
    </AuthLayout>
  )
}

/*
  El grid es como un div con varias propiedaddes o atributos extras,
  el sx es un style extendent, mos permite trabajar con los styles
  pero nos permite trabajar con la propiedad que definimos en el theme,
  el xs nos da la pauta del tamano de los elementos
*/

/*
  Para controlar el formulario usamos el hook de los input, donde mandamos que 
  inputs se usaran (email, password), ya a cada input de la vista setteamos ese 
  valor y ya con la funcion onubmit disparamos la accion, para este caso, al 
  boton de login tambien le ponemos type submit para que al precionar se ejecute
  la funcion 
*/

/*
  const { status } = useSelector( state => state.auth), del reducer usamos la variable de status para saber el estado de la autenticacion,
  const isAuthenticating = useMemo( () => status === 'checking', [status]), con el useMemo podemos si el status cambia a checking la variable se hace true, pero 
  caso contrario no se crea, esto ayuda para si le da click a un boton de loggeo estos momentaneamente los desabilita, y si se loggea quedan asi. Con el memo 
  memorizamos el resultado de una función y solo volver a calcularla si alguna de las dependencias cambia
*/