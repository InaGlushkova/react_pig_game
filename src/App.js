import React, { Component } from 'react';
import { maxScore, initState } from './Data/Data';
import Player from './Player/Player';
import Dice from './Dice/Dice';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  changePlayer = () => {
    let players = this.state.players.map(player => {
      return {
        ...player,
        currentScore: 0,
        active: !player.active
      }
    })
    this.setState({ players, diceNum: 0 });
  }
  
  newGameHanlder = () => {
    this.setState({ initState });
  }

  rollDiceHanlder = () => {
    if (this.state.players.find(player => player.winner)) {
      return;
    }
    
    let diceNum = Math.floor(Math.random() * 6) + 1;
    this.setState({ diceNum })
    
    if (diceNum !== 1) {
      let players = this.state.players.map(player => {
        if (player.active) {
          return {
            ...player,
            currentScore: player.currentScore + diceNum
          }
        }
        return player;
      });
      this.setState({ players, diceNum });
    } else {
      this.changePlayer();
    }
  }

  holdDiceHanlder = () => {
    if (this.state.players.find(player => player.winner)) {
      return;
    }

    this.setState({ diceNum: 0 });

    let players = this.state.players.map(player => {
      if (player.active) {
        return {
          ...player,
          score: player.score + player.currentScore
        }
      }
      return player;
    });
    
    this.setState({ players }, () => {
      let hasWinner = this.state.players.find(player => player.score >= maxScore);

      if (hasWinner) {
        let players = this.state.players.map(player => {
          if (player.active) {
            return {
              ...player,
              name: "WINNER",
              winner: true
            }
          }
          return player;
        })
        this.setState({ players, diceNum: 0 })
      } else {
        this.changePlayer();
      }
    })
  }

  render() {
    return (
        <div className="wrapper clearfix">
          <Player 
            name={this.state.players[0].name}
            score={this.state.players[0].score}
            currScore={this.state.players[0].currentScore}
            active={this.state.players[0].active}
            winner={this.state.players[0].winner}>
          </Player>
          <Player 
            name={this.state.players[1].name}
            score={this.state.players[1].score}
            currScore={this.state.players[1].currentScore}
            active={this.state.players[1].active}
            winner={this.state.players[1].winner}>
          </Player>
          <button className="btn-new" onClick={this.newGameHanlder}>
            <i className="ion-ios-plus-outline"></i>New game
          </button>
          <button className="btn-roll" onClick={this.rollDiceHanlder}>
            <i className="ion-ios-loop"></i>Roll dice
          </button>
          <button className="btn-hold" onClick={this.holdDiceHanlder}>
            <i className="ion-ios-download-outline"></i>Hold
          </button>
          <Dice diceNum={this.state.diceNum}></Dice>
      </div>
    );
  }
}

export default App;