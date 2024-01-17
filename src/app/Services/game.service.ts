import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameState = [8, 8, 8, 8, 8, 8, 8, 8, 8];

  public winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Corrected the sixth winning position
    [0, 4, 8],
    [2, 4, 6]
  ];

  public gameOver = false;
  public chance = 0;
  public draw = false;
  public winner = 8;

  constructor() { }

  changeGameState(position: number) {

if(this.gameOver)
{
  alert("Game Is Over 🕹️")
  return
}
if(this.gameState[position]!==8)
{


  alert("Position is Already Occupied")
}
    this.gameState[position] = this.chance;
    //check
    if (this.checkWinner()) {
      this.gameOver = true;
      this.winner = this.chance
      return;
    }

    if (this.checkForDraw()) {
 this.gameOver=true
 this.draw=true
 return 
    }
    this.chance=this.chance==1?0:1;


  }

  // draw k liye 
  checkForDraw() {
    for (let i = 0; i < this.gameState.length; i++) {
      if (this.gameState[i] == 8) {
        return false;
      }
    }
    return true;
  }

  checkWinner() {
    for (let i = 0; i < this.winningPositions.length; i++) {
      let winningSubArray = this.winningPositions[i];
      if (
        this.gameState[winningSubArray[0]] === this.gameState[winningSubArray[1]] &&
        this.gameState[winningSubArray[1]] === this.gameState[winningSubArray[2]] &&
        this.gameState[winningSubArray[0]] !== 8
      ) {
        return true;
      }
    }
    return false;
  }

  restartGame() {
    this.gameState = [8, 8, 8, 8, 8, 8, 8, 8, 8];
    this.winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    this.gameOver = false;
    this.chance = 0;
    this.draw = false;
    this.winner = 8;
  }
}
