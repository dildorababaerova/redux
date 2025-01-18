// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
// import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer.js';
import noteService from './services/notes'
import noteReducer, { setNotes } from './reducers/noteReducer'
import App from './App.jsx';

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
});
console.log(store.getState());

noteService.getAll().then(notes =>
  store.dispatch(setNotes(notes))
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

