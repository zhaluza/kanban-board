import React, { useState } from 'react';
import './column.scss';
import Card from '../Card';
import { v4 as uuidv4 } from 'uuid';

const Column = ({ title, cards, nextId, setModalOn, setSelectedCol }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      {cards.map((card) => (
        <Card key={uuidv4()} id={nextId} text={card.text} colName={title} />
      ))}
      <button
        onClick={() => {
          setModalOn(true);
          setSelectedCol(title);
        }}
      >
        Add Card
      </button>
    </div>
  );
};

export default Column;
