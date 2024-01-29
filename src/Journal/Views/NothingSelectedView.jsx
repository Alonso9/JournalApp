import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    // <>
      <Grid
        container 
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={ {minHeight: 'calc(100vh - 110px)', backgroundColor:'primary.main', borderRadius: 3 } }
      >
        <Grid item xs={ 12 }>
        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "white", fontSize: 100}} />
        </Grid>
        <Grid item xs={ 12 }>
        {/* <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "white", fontSize: 100}} /> */}
        <Typography color='white' variant='h5'>Select o create a new entrace</Typography>
        </Grid>
        
      </Grid>
    // </>
  )
}
