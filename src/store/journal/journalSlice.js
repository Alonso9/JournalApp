import { createSlice } from "@reduxjs/toolkit";

export const JournalSlice = createSlice({
    name: 'Journal',
    initialState : {
        isSaving: true, // bandera para saber si esta guardando
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
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },
    }
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = JournalSlice.actions; 