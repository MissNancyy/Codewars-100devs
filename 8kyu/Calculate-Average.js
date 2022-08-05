// PROMPT:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.



// MY SOLUTION:
function find_average(array) {
    // your code here
    if (array.length > 0) { // DONT FORGET THE ARRAY.LENGTH SINCE THE QUESTION IS ASKING IF THE ARRAY CONTAINS ANYTHING, I INITIALLY JUST PUT ARRAY > 0 AND CODE DIDNT RUN, IT IS ARRAY.LENGTH
      let newArrayz = array.reduce((x,i) => x + i, 0)
      let average = newArrayz/array.length
      return average
    }
    else {
    return 0;
  }
  }

// OR
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }

// OR
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }

// OR
function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}

// OR
const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;

// OR
function find_average(array) {
    return array.length>0 ?
      array.reduce((a,b)=>a+b)/array.length : 0
  }
