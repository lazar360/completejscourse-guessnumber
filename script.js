'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
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
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Trop haut ! ⤴️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' Game Over mon pote ! 😥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = ' Trop bas ! ⤵️';
    score--;
    document.querySelector('.score').textContent = score;
  }
});


