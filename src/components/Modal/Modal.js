import React, { useState } from 'react';
import './modal.scss';

const Modal = ({ setModalOn, handleAddCard, selectedCol, setSelectedCol, nextId }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="modal">
      <div className="modal__input">
        <h2>Your next task:</h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add text here"
        />
        <div className="buttons">
          <button
            onClick={() => {
              handleAddCard(nextId, inputValue, selectedCol);
              setModalOn(false);
              setSelectedCol(null);
            }}
          >
            Add Task
          </button>
          <button onClick={() => setModalOn(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
