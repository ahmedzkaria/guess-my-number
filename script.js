'use strict';

// me 070
// This is a way to selectany element in javascript
// console.log(document.querySelector('.message'.textContent)); // textContent to view only the CONTENT

// me 071
// DOM simply means to make javascript interact with a webpage
// DOM is a connection between HTML docs and javascript code
// document is an object which repersents an entry point into the dom

// me 072
// To change the text content
/*document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textcontent = 13;
document.querySelector('.score').textContent = 10;*/

// With th INPUT field you need to use VALUE

// HEre it is empty
/*console.log(document.querySelector('.guess').value);*/
// document.querySelector('.guess').value = 23;

// 073
// We want to listen to the EVENT on the button CHECK

//  074 First we will define the secret number OUTSIDE ,bec if we did it inside then on each click we will get a NEW secret num
let secretNumber = Math.trunc(Math.random() * 20) + 1; // we set the secret num as variable so we can compare it with the guess that we will input
let score = 20; // to make score DECREASE first we will declare it heret hen decrease it then,also use let so the score will be changed,use it outside so that it will available always not just in the dom so that it can be accessed every time the event handler happens
let highscore = 0;
const displayMessage = function (actualMessage) {
  document.querySelector('.message').textContent = actualMessage;
};

document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);

    console.log(typeof guess); //INput field always'or any thing from ui' give s a string

    // if there is no value inputted and you press check:
    if (!guess) {
      // Here if the value is zero ,it means NOT guess'!guess' this will happen:
      displayMessage('No number!');

      // when player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = 'Correct Number!';
      displayMessage('Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      // Manipulate css
      document.querySelector('body').style.backgroundColor = '#60b347'; // style syntax need to be changed'camel case notation'

      document.querySelector('.number').style.width = '30rem';

      // Implement highscore
      if (score > highscore) {
        highscore = score; //??
        document.querySelector('.highscore').textContent = highscore;
      } // display

      // When guess is WRONG:
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        score--; //decrease the score only without displaying it.
        document.querySelector('.score').textContent = score; // to display the new score here.
        // that means we select the class score and change the text'value' to the variable score '20'
      } else {
        displayMessage('You lost the game! ');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--; //decrease the score only without displaying it.
  //     document.querySelector('.score').textContent = score; // to display the new score here.
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score; // that means we select the class score and change the text'value' to the variable score '20'
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! ';
  //     document.querySelector('.score').textContent = 0;
  //   }
); // This is a METHOD so we need to call it using ('here is the TYPE of the event' , here we specify the REACTION to the CLICK event hence we use a function and this is called the event HANDLER),this FUNC will be called as soon as the event happens
// SUMMARY:We selected the btn using quersSelector then we use addEventListener method  on that element to attach anevent handler

// Again btn
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ''; //that means empty
  document.querySelector('.score').textContent = score; //here we can say we select score class and change its condition'text' to default which is in 'HTML"
  document.querySelector('.number').textContent = '?'; //As in HTML 'text'
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
/*.....................
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
