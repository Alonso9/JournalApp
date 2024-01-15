import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent"
            open
            sx= {{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap> Ramon Alonso</Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon color="error">
                                    {/* save */}
                                    <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Some text to fill this example xd.'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
