'use strict';
// var querySelector = document.querySelector('.message').textContent;
// var getElement = document.getElementById('titre').textContent;

// document.querySelector('.message').textContent = 'Correct Number 😃';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
var score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😡 No Number ! ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 😃';
  }

  
});
