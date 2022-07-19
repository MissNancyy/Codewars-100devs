// PROMPT:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// MY SOLUTION: 
function simpleMultiplication(number) {
    // your code........
  if (number % 2 == 0){
    return number*8
  }
  else {
    return number*9
  }
}

// OR
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}


// OR
function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }

// OR
const simpleMultiplication=n=>n*(n%2?9:8)

// OR
function simpleMultiplication(number){
    return (number % 2 == 0)? number * 8 : number * 9;
}

// OR
function simpleMultiplication(number){
    return number%2 === 0 ? number * 8 : number * 9;
}