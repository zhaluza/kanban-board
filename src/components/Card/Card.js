import React from 'react';
import './card.scss';

const Card = ({ id, text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Card;
