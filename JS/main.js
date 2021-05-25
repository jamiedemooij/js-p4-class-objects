class Player 
{
    constructor(name, symbol){
        this.name = name;
        this.symbol = symbol;
        this.points = 0;
        this.games = 1;
    }
    addPoints(givePoints){
        this.points += givePoints;
    }
    addGames(){
        this.games += 1;
    }
}
const playerOne = new Player("Henk","X");
//console.log(playerOne);
//console.log(playerOne.name);
const playerTwo = new Player("Nathan", "O");
//console.log(playerTwo.symbol);
//console.log(playerOne.points);
playerOne.addPoints(69);
//console.log(playerOne.points);
console.log("Total games: " + playerOne.games);
playerOne.addGames();
console.log("Total games: " + playerOne.games);