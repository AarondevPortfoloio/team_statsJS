const team ={
_players: [{firstName: 'Roger', lastName: 'Bishop', age: 23}, {firstName: 'Katrina', lastName: 'Alvarex', age: 25},
{firstName: 'Nia', lastName: 'Holmes', age: 20}],
_games: [{opponent: 'Jets', teamPoints: 42, opponentPoints: 27},{opponent: 'Giants', teamPoints: 45,opponenetPoints:17},
{opponent: 'Eagles', teamPoints: 33,opponentPoints: 15}],

get players() {
return this._players;
},
get games(){
  return this._games;
},
addPlayer(newFirstName,newLastName,newAge){
let player = {
  firstName: newFirstName,
  lastName: newLastName,
  age: newAge
};
this.players.push(player);
},
addGame(newOpponent, newTeamPoints,newOpponentPoints){
let game ={
opponent: newOpponent,
teamPoints: newTeamPoints,
opponentPoints: newOpponentPoints
};
this.games.push(game);
}
};
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);
team.addGame('Titans', 100,98);
console.log(team.games);
