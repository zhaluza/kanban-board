import React from 'react';
import './card.scss';

const Card = ({ id, text }) => {
  return (
    <div className="card">
      <p>{text}</p>
    </div>
  );
};

export default Card;
