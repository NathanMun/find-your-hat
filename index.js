// Please copy and paste your GitHub Repo on line 2 (optional)
// <GitHub Repo>

// JavaScript Assessment Rubric: https://generation.instructure.com/courses/2342/assignments/143783

// Codecademy: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

// Please break down your thinking process step-by-step (mandatory)
// step 1 : Assign character
// step 2 : Set start and final positions
// step 3 : Print play field
// step 4 : start the game with prompt
// step 5 : write screening scope of the game;for instance, input 'R' for going right / 'L' for going left etc.
// step 6 : what to display when win or lose


// JS Assessment: Find your hat //

const prompt = require('prompt-sync')({ sigint: true }); // This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program by press Crtl+c
const clear = require('clear-screen');//every turn clear the screen that meant you will not get new field in time you choose the direction

//  1) assign characters
const hat = '🏠';
const hole = '👻';
const fieldCharacter = '🟩';
const pathCharacter = '👾';
const win = '❤️';
const lose = '☠️';
const playing = true;


class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.positionX = 0;
    this.positionY = 0;

    // 2) Set start and final positions before the game starts
    this.field[0][0] = pathCharacter;
    this.field[2][2] = hole;
    this.field[4][4] = hat;
    this.winMap = [['win']];
    this.loseMap = [['lose']];
    }
    
  
  //  3) your print map code here
  print() {
    clear();
    for (let row of this.field) {
      console.log(row.join(''));
    }
  // 4) start the game
  while(playing) {
    let input = prompt('Which direction do you want to go?');
    input = input.toUpperCase();
  
  // 5) criteria of the game with screening
    switch(input) {
      case 'R':
        if (this.positionY < this.field[0].length - 1) {
          this.field[this.positionX][this.positionY + 1] = pathCharacter;
          this.field[this.positionX][this.positionY] = fieldCharacter;
          this.positionY += 1;
        }
        break;
      case 'L':
        if (this.positionY > 0) {
          this.field[this.positionX][this.positionY - 1] = pathCharacter;
          this.field[this.positionX][this.positionY] = fieldCharacter;
          this.positionY -= 1;
        }
        break;
      case 'U':
        if (this.positionX > 0) {
          this.field[this.positionX - 1][this.positionY] = pathCharacter;
          this.field[this.positionX][this.positionY] = fieldCharacter;
          this.positionX -= 1;
        }
        break;
      case 'D':
        if (this.positionX < this.field.length - 1) {
          this.field[this.positionX + 1][this.positionY] = pathCharacter;
          this.field[this.positionX][this.positionY] = fieldCharacter;
          this.positionX += 1;
        }
        break;
      default:
        console.log('Wrong Input');
        break;
    }
    
  // 6) how to display when win or lose
      if(this.field[this.positionX][this.positionY] === this.field[4][4]) {
        this.field = this.winMap;
        clear();
        prompt('YOU ARE THE WINNER!!');
      } else if (this.field[this.positionX][this.positionY] === this.field[2][2]) {
        this.field = this.loseMap;
        clear();
        prompt('TRY AGAIN!!');
      }

      clear();
      for (let row of this.field) {
        console.log(row.join(''));
      }

    }
  }
}

const playMap = new Field ([[fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter],
  [fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter],
  [fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter],
  [fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter],
  [fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter],]);


// print playMap
playMap.print();

