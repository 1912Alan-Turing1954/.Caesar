import { wirePairs, alphabet } from './libary';

console.log(wirePairs);

let originalInput = document.querySelector("#input");
let shiftInput = document.querySelector("#shift");

let originalMessage = originalInput.value;
  originalInput.addEventListener("input", characterEntered, false);
  shiftInput.addEventListener("input", numberEntered, false);

  function characterEntered(e) {
  originalMessage = e.target.value;
  originalMessage = originalMessage.toUpperCase();
  originalMessage = originalMessage.replace(/[^A-Z]/, '');

  e.target.value = originalMessage;

  ceasar(); 
}

function numberEntered() {
  ceasar();
}

function ceasar() {
  let shift = shiftInput.value ? Number(shiftInput.value) : 0;
  
  var codeArr = originalMessage.toLowerCase();  // String to Array

  var encodedArr = codeArr.split('').filter(el => el !== ' ' ).map(el => wirePairs[el]);

  var encodedArr2 = encodedArr.map(el => {
    let spindle = (el + shift) % 26;
    let answer = spindle;
    return answer;
  })

  var arr = encodedArr2.map(el => alphabet[el]).join("").toUpperCase(); // Array to String
  document.getElementById("output").value = arr;
}