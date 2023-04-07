'use strict';
var querySelector = document.querySelector('.message').textContent;
var getElement = document.getElementById('titre').textContent;

document.querySelector('.message').textContent = 'Correct Number 😃';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value); 