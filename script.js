'use strict';
var querySelector = document.querySelector(".message").textContent;
var getElement = document.getElementById("titre").textContent;
console.log(`
select an element
----------------------------------------------------------------
En utilisant :
- un query selector document.querySelector(".message").textContent : ${querySelector}
-> un point pour une classe et un dièse pour un id
- un get element by id document.getElementById("titre").textContent : ${getElement};`);

