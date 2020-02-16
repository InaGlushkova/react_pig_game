import React from 'react';

const diceImage = props => {
  if (!props.diceNum) {
    return (
      <div></div>
    );
  }

  const diceImg = require(`../pictures/dice-${props.diceNum}.png`);
  return (
    <img src={diceImg} alt="Dice" className="dice" />
  );
}

export default diceImage;