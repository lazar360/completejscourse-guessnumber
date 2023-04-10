'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscrore = 0;
document.querySelector('.score').textContent = score;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage(" Ceci n'est pas une pipe ! 😡 ");
    score--;
  } else if (guess === secretNumber) {
    displayMessage('Tu as trouvé le nombre secret 😃');
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscrore) {
      highscrore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? ' Trop haut ! ⤴️' : ' Trop bas ! ⤵️'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' Game Over mon pote ! 😥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(' Start gessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = ' ? ';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
