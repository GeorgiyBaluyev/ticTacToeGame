(()=>{
    'use strict';
let btnsOnField = document.querySelectorAll('.field');
let newGame = document.querySelector('#newGame');
let count1 = document.querySelector('.player1count');
let count2 = document.querySelector('.player2count');
let counter = 0;
let main = document.querySelector('main');
let winnerOne = document.createElement('div');
let winnerTwo = document.createElement('div');
let draw = document.createElement('div');


 btnsOnField.forEach(btn => btn.addEventListener('click', function putXO() {
        counter+= 1;
        this.disabled = 'true';
        if(counter % 2 !== 0){
            this.innerHTML = 'X';
        }else{
            this.innerHTML = 'O';
        }
     if(btnsOnField[0].innerHTML === 'X' && btnsOnField[1].innerHTML === 'X' && btnsOnField[2].innerHTML === 'X' ||
         btnsOnField[3].innerHTML === 'X' && btnsOnField[4].innerHTML === 'X' && btnsOnField[5].innerHTML === 'X' ||
         btnsOnField[6].innerHTML === 'X' && btnsOnField[7].innerHTML === 'X' && btnsOnField[8].innerHTML === 'X'||
         btnsOnField[0].innerHTML === 'X' && btnsOnField[4].innerHTML === 'X' && btnsOnField[8].innerHTML === 'X'||
         btnsOnField[2].innerHTML === 'X' && btnsOnField[4].innerHTML === 'X' && btnsOnField[6].innerHTML === 'X'||
         btnsOnField[0].innerHTML === 'X' && btnsOnField[3].innerHTML === 'X' && btnsOnField[6].innerHTML === 'X'||
         btnsOnField[1].innerHTML === 'X' && btnsOnField[4].innerHTML === 'X' && btnsOnField[7].innerHTML === 'X'||
         btnsOnField[2].innerHTML === 'X' && btnsOnField[5].innerHTML === 'X' && btnsOnField[8].innerHTML === 'X'){
         count1.innerHTML = +count1.innerHTML + 1;
         main.appendChild(winnerOne);
         winnerOne.innerHTML = 'Player 1 is Winner';
         winnerOne.style.cssText = 'background: url("./img/background_for_winner.jpg") no-repeat; \
    background-size: cover; \
    width: 400px; \
    height: 300px; \
    font-family: \'Coiny\', cursive; \
    color: darkgoldenrod; \
    font-weight: bold; \
    font-size: 25px; \
    position:absolute; \ ';
     }else if(btnsOnField[0].innerHTML === 'O' && btnsOnField[1].innerHTML === 'O' && btnsOnField[2].innerHTML === 'O' ||
         btnsOnField[3].innerHTML === 'O' && btnsOnField[4].innerHTML === 'O' && btnsOnField[5].innerHTML === 'O' ||
         btnsOnField[6].innerHTML === 'O' && btnsOnField[7].innerHTML === 'O' && btnsOnField[8].innerHTML === 'O'||
         btnsOnField[0].innerHTML === 'O' && btnsOnField[4].innerHTML === 'O' && btnsOnField[8].innerHTML === 'O'||
         btnsOnField[2].innerHTML === 'O' && btnsOnField[4].innerHTML === 'O' && btnsOnField[6].innerHTML === 'O'||
         btnsOnField[0].innerHTML === 'O' && btnsOnField[3].innerHTML === 'O' && btnsOnField[6].innerHTML === 'O'||
         btnsOnField[1].innerHTML === 'O' && btnsOnField[4].innerHTML === 'O' && btnsOnField[7].innerHTML === 'O'||
         btnsOnField[2].innerHTML === 'O' && btnsOnField[5].innerHTML === 'O' && btnsOnField[8].innerHTML === 'O'){
         count2.innerHTML = +count2.innerHTML + 1;
         main.appendChild(winnerTwo);
         winnerTwo.innerHTML = 'Player 2 is Winner';
         winnerTwo.style.cssText = 'background: url("./img/background_for_winner.jpg") no-repeat; \
    background-size: cover; \
    width: 400px; \
    height: 300px; \
    font-family: \'Coiny\', cursive; \
    color: darkgoldenrod; \
    font-weight: bold; \
    font-size: 25px; \
    position:absolute; \ '
     }else{
         if(btnsOnField[0].innerHTML && btnsOnField[1].innerHTML && btnsOnField[2].innerHTML && btnsOnField[3].innerHTML &&
             btnsOnField[4].innerHTML && btnsOnField[5].innerHTML &&btnsOnField[6].innerHTML &&btnsOnField[7].innerHTML &&
             btnsOnField[8].innerHTML ){
             count1.innerHTML = +count1.innerHTML + 1;
             count2.innerHTML = +count2.innerHTML + 1;
             main.appendChild(draw);
             draw.innerHTML = 'Draw';
             draw.style.cssText = 'background: url("./img/background_for_winner.jpg") no-repeat; \
    background-size: cover; \
    width: 400px; \
    height: 300px; \
    font-family: \'Coiny\', cursive; \
    color: darkgoldenrod; \
    font-weight: bold; \
    font-size: 25px; \
    position:absolute; \ ';
         }
     }
    }));

    winnerOne.addEventListener('click', function (){
       btnsOnField.forEach(btn => {
           btn.innerHTML= '';
           counter = 0;
           btn.disabled = false;
       });
        this.style.display = 'none';
    });

    winnerTwo.addEventListener('click', function (){
        btnsOnField.forEach(btn => {
            btn.innerHTML= '';
            counter = 0;
            btn.disabled = false;
        });
        this.style.display = 'none';
    });

    draw.addEventListener('click', function (){
        btnsOnField.forEach(btn => {
            btn.innerHTML= '';
            counter = 0;
            btn.disabled = false;
        });
        this.style.display = 'none';
    });

    newGame.addEventListener('click', restart);
    function restart() {
        counter = 0;
        btnsOnField.forEach(btn => {
            btn.disabled = false;
            btn.innerHTML = '';
            count1.innerHTML = '0';
            count2.innerHTML = '0';
        });
    }



})();