import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";
import { setNotes } from "../../store/journal/journalSlice";

export const SideBar = ({ drawerWidth }) => {
    const dispatch = useDispatch();
    const { isSaving, messageSaved, active, notes } = useSelector( state => state.journal)
    const { status, displayName, email, photoUrl } =  useSelector( state => state.auth )

    const setActiveNote = (note) => {
        dispatch( setNotes(note) );
    }
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
                <Box>
                    <Typography variant="h6" noWrap>{ displayName }</Typography>
                    <Divider />
                    <Typography variant="p" noWrap>{ email }</Typography>
                </Box>
            </Toolbar>
            <Divider/>
            <List>
                {
                    notes.map( note => (
                        <SideBarItem {...note} key={note.id} />
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
