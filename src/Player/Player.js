import React from 'react';

const player = props => {
  let playerClass = "player-panel";
  props.active ? playerClass += " active" : 1;
  props.winner ? playerClass += " winner" : 1;

  return (
    <div className={playerClass}>
      <div className="player-name">{props.name}</div>
      <div className="player-score">{props.score}</div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score">{props.currentScore}</div>
      </div>
    </div>
  );
}

export default player;