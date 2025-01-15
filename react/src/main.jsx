// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer.js';
import App from './App.jsx';

import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'

const reducer = configureStore({
  notes: noteReducer,
  filter: filterReducer
});

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

