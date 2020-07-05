import React, { useState } from 'react';
import Column from './components/Column';
import { v4 as uuidv4 } from 'uuid';
import './scss/app.scss';
import Modal from './components/Modal';

const App = () => {
  const [nextId, setNextId] = useState(6);
  const [data, setData] = useState({
    'To Do': [
      { id: 0, text: 'Go shopping' },
      { id: 1, text: 'Lose weight' },
    ],
    Doing: [
      { id: 2, text: 'Get a job' },
      { id: 3, text: 'Finish Codesmith fellowship' },
    ],
    Done: [
      { id: 4, text: 'Finish junior fellowship' },
      { id: 5, text: 'Make dinner' },
    ],
  });
  const [modalOn, setModalOn] = useState(false);
  const [selectedCol, setSelectedCol] = useState(null);

  const handleAddCard = (id, text, colName) => {
    setData((prevState) => {
      const newCard = { id, text };
      const newTasks = [...prevState[colName]];
      newTasks.push(newCard);
      return { ...prevState, [colName]: newTasks };
    });
    setNextId((prevId) => prevId + 1);
  };

  const columns = [];
  for (const column in data) {
    columns.push(
      <Column
        key={uuidv4()}
        title={column}
        cards={data[column]}
        handleAddCard={handleAddCard}
        setModalOn={setModalOn}
        setSelectedCol={setSelectedCol}
      />
    );
  }
  return (
    <div className="app">
      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          handleAddCard={handleAddCard}
          selectedCol={selectedCol}
          setSelectedCol={setSelectedCol}
          nextId={nextId}
        />
      )}
      <div className="columns">{columns}</div>
    </div>
  );
};

export default App;
