// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer.js';
import App from './App.jsx';

<<<<<<< HEAD
import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'

const reducer = configureStore({
=======
const reducer = combineReducers({
>>>>>>> e6b74ff0c542a9c03658e2031b34b939ebb108bd
  notes: noteReducer,
  filter: filterReducer
});

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

