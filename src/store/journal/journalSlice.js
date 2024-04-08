import { createSlice } from "@reduxjs/toolkit";

export const JournalSlice = createSlice({
    name: 'Journal',
    initialState : {
        isSaving: false, // bandera para saber si esta guardando
        messageSaved: '',
        notes: [],
        active: null, // Para saber que nota esta activa
        // active: {
        //     id: 'ASDF',
        //     title: '',
        //     body: '',
        //     date: 123456789,
        //     imageUrls: [],
        // },
        
    },
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },

        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload ); // Le grabamos al nodo de notas del redux la nueva nota
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            // console.log(action.payload)
            // debugger
            state.notes = state.notes.map( note  => {
                if( note.id === action.payload.id) {
                    return action.payload
                }
                
                return note 
            });
            state.messageSaved = `${ action.payload.title } has been updated!`;
        },
        deleteNoteById: (state, action) => {

        },
    }
});

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = JournalSlice.actions; 