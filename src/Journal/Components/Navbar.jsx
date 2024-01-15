// import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Navbar = ({ drawerWitdth = 240 }) => {
  return (
    <AppBar 
        position="fixed" 
        sx={{ 
          width: { sm: `calc(100% - ${drawerWitdth}px)` },
          ml: { sm: `${drawerWitdth}px` }
         }}
    
    >
        <Toolbar>
            <IconButton
              color='inherit'
              edge='start'
              sx={{ mr: 2, display: {sm: 'none'}  }}
            >
              IconMenu
            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignContent='center'>
              <Typography variant="h6" noWrap component='div'> Journal App</Typography>
              <IconButton color='error'> 
                {/* Logout icon */}
                {/* <div><i className="fa-solid fa-arrow-right-from-bracket">A</i></div> */}
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
              </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}


/*
  Le pasamos drawerWidth, en caso de no pasarle le asigna 240 por defecto, ahora en este parte sx={{ mr: 2, display: {sm: 'none'}  }},
  le indicamos que al ser pantallas muy pequeñas que muestre el icon del menu 
*/