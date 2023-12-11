import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { PurpleTheme } from './'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ PurpleTheme } >
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

/*
  Un highOrderComponent no es mas que otro componente que 
  contiene otros componentes hijos, en este Theme va a recibir 
  nuestro componente de la App, con ThemeProvider y CssBaseline,
  nos aseguramos que el estillo de la App sea identico en todos los 
  navegadores 
*/