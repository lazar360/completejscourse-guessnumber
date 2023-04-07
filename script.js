'use strict';

var score = 20;
var secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      " Ceci n'est pas une pipe ! 😡 ";
    score--;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Tu as trouvé le nombre secret 😃';
    score += 5;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = ' Trop haut ! ⤴️';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = ' Trop bas ! ⤵️';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
