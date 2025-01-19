import { current, createSlice } from '@reduxjs/toolkit'
// import { create } from 'json-server';

const generateId = () =>  
  Number((Math.random() * 1000000).toFixed(0));

const noteSlice = createSlice({
  name:'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      const content = action.payload
      state.push({
        content,
        important: false,
        id: generateId(),
      })
      console.log("STATE", current(state))
    },
    
    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(note => note.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
    
      console.log("STATE", current(state))
    return state.map(note =>
      note.id !== id ? note : changedNote
    )
  },
  appendNote(state, action) {
    state.push(action.payload)
  },

  setNotes(state, action) {      
    return action.payload
      }
},
});





export const { createNote, toggleImportanceOf, appendNote, setNotes } = noteSlice.actions; 

export default noteSlice.reducer;
