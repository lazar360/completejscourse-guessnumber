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
    document.querySelector('.message').textContent = 'Tu as trouvé le nombre secret 😃';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

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

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = ' Start gessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = ' ? ';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
