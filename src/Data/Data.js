const maxScore = 100;
const initState = {
  players: [
    {
      name: "Player 1",
      score: 0,
      currentScore: 0,
      active: true,
      winner: false
    },
    {
      name: "PLayer 2",
      score: 0,
      currentScore: 0,
      active: false,
      winner: false
    }
  ],
  diceNum: 0
};

export { maxScore, initState };