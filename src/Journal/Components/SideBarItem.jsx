import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote, setNotes } from '../../store/journal/journalSlice'

export const SideBarItem = ({ id, title = '', body, date, imageUrls = [] }) => {
    const dispatch = useDispatch();
    const newTitle = useMemo(() => {
        // console.log(title.length+title)
        return title.length > 17 
        ? title.substring(0, 17)+'...' : title;
    }, [title])

    const setNote = () => {
        // console.log({
        //     id, newTitle, body
        // })
        dispatch( setActiveNote({
            id, title, body, date, imageUrls
        }) );
    }

  return (
    <ListItem key={id} disablePadding>
        <ListItemButton onClick={setNote}>
            <ListItemIcon color="error">
                {/* save */}
                <FontAwesomeIcon icon="fa-solid fa-bookmark" />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={newTitle} />
                <ListItemText secondary={body} />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
