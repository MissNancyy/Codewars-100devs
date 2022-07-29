// PROMPT:
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

// MY SOLUTION:
const smallEnough = (a, limit) => !a.some((e) => e > limit);

// OR
function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

// OR
function smallEnough(a, limit){
    return a.every(x => x <= limit);
  }

// OR
function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++){
      if (a[i] > limit) {
        return false
      }
    }
    return true
  
  }