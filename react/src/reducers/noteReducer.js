// reducers/noteReducer.js
// const initialState = [
//   { id: 1, content: 'First note from Redux', important: true },
//   { id: 2, content: 'Second note from Redux', important: false },
// ];

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload];
    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload.id;
      const noteToChange = state.find(note => note.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map(note => (note.id !== id ? note : changedNote));
    }
    default:
      return state;
  }
};

export default noteReducer;
