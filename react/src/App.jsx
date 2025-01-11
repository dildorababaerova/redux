import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const notes = useSelector(state => state); // Доступ к состоянию Redux
  const dispatch = useDispatch(); // Функция для отправки действий

  // Обработчик для переключения важности
  const toggleImportance = (id) => {
    dispatch({
      type: 'TOGGLE_IMPORTANCE',
      payload: { id },
    });
  };

  return (
    <div>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.content}{' '}
            <strong>{note.important ? 'important' : ''}</strong>{' '}
            {/* Кнопка для изменения важности */}
            <button onClick={() => toggleImportance(note.id)}>
              Toggle Importance
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
