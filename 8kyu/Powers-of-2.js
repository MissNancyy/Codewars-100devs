// PROMPT:
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


// MY SOLUTION:
function powersOfTwo(n){
    var myArray = [];
    for (var i=0; i<=n; i++){
      myArray.push(2**i);
    }
    return myArray
  }
  
  const result = powersOfTwo(2)
  console.log(result)

// OR **
function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }

// OR
function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }

// OR
function powersOfTwo(n){
    let arr = [];
    for(let i = 0; i <= n; i++) {
      arr.push(2 ** i);
    }
    return arr;
  }

// OR
powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));

// OR
// map method
const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e**i )