// import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { onLog } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logout, startLogout } from "../../store/auth";


export const Navbar = ({ drawerWitdth = 240 }) => {
  const dispatch = useDispatch();
  
  // console.log(auth);
  const onLogout = ()=> {
    dispatch( startLogout() );  
  }
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
              <IconButton color='error' variant='button' onClick={ onLogout  } > 
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