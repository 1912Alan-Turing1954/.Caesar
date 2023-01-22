const wirePairs = {
  a: 0,
  b: 1,
  c: 2,
  d: 3, 
  e: 4, 
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12, 
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

const alphabet = {
  0: 'a',
  1: 'b',
  2: 'c',                        
  3: 'd',
  4: 'e', 
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j',
  10: 'k',
  11: 'l', 
  12: 'm', 
  13: 'n',
  14: 'o',
  15: 'p',
  16: 'q',
  17: 'r',
  18: 's',
  19: 't',
  20: 'u',
  21: 'v',
  22: 'w',
  23: 'x',
  24: 'y',
  25: 'z', 
};

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