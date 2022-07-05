// PROMPT:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.



// MY SOLUTION:
function positiveSum(arr) {
    const reducer = (accumulator, current) => accumulator + (current > 0 ? current : 0)
    return arr.reduce(reducer, 0)
  }


// OR
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }


// OR
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

// OR
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
        }
    }
    return sum;
  }
// OR
function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
  }