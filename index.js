

var rot = 13;
var temp = 0;
var minCharCode = 65;
var maxCharCode = 90;

function rot13() {
  var secretLetter = document.getElementById("decoded").value;
  var codeArr = secretLetter.split("");  // String to Array
  var decodedArr = []; 

   for (var i = 0; i < secretLetter.length; i++){
  	codeArr[i] = codeArr[i].toUpperCase();
    var charCode = codeArr[i].charCodeAt(0);

    if (codeArr[i].charCodeAt(0) >= minCharCode && codeArr[i].charCodeAt(0)  <= maxCharCode) {
      var modified = charCode + rot;
      if(modified > maxCharCode){
          temp = modified - maxCharCode-1;
          modified = minCharCode + temp;
      }
      var convertedChar = String.fromCharCode(modified);
      decodedArr[i] = convertedChar;
    } else {
      decodedArr[i] = codeArr[i];
    }
  }
  
  var arr = decodedArr.join(""); // Array to String
  document.getElementById("encoded").value = arr;
}