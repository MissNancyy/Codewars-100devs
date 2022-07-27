// PROMPT:
Complete the function which converts hex number (given as a string) to a decimal number.

// MY SOLUTION:
function hexToDec(hexString){
    //your code here
    return parseInt(hexString,16);
  }

// OR
const hexToDec = h => parseInt(h, 16);

// OR
function hexToDec(hexString){
    return Number.parseInt(hexString, 16);
  }