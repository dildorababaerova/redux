// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import filterReducer from './reducers/filterReducer.js';
import noteReducer from './reducers/noteReducer'
import App from './App.jsx';

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

