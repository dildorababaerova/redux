import React from 'react';
import Notes from './Notes';
import NewNote from './NewNote';

const App = () => {
  return (
    <div>
      <h2>Notes</h2>
      <ul>
      <NewNote/>
       <Notes/> 
      </ul>
    </div>
  );
};

export default App;
