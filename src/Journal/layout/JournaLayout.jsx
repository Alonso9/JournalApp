import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Navbar, SideBar } from '../Components'

const drawerWidth = 240;

export const JournaLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}}>
        {/* Navbar */}
        <Navbar drawerWidth={drawerWidth}/>

        {/* Sidebar */}
        <SideBar drawerWidth={drawerWidth}/>

        <Box 
            component='main'
            sx={{flexGrow: 1, p: 3}}
        >
            {/* toolbar */}
            <Toolbar/>
            { children }

        </Box>
    </Box>
  )
}


/*
  El drawerWidth es el espacio que tiene el navbar a su izquierda con el sidebar,
  el toolbar le el espacio par el texto debajo del nabar 
*/