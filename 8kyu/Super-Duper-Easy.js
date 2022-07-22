// PROMPT: 
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// MY SOLUTION:
function problem(x){
    //your code here
    if (typeof x === 'string') {
      return "Error"
    }
    else {
      return x * 50 + 6
    }
  }

// OR
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

// OR
function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
  }

// OR
function problem(x){
    return typeof x == 'string' ? 'Error' : (x * 50 + 6);
  }

// OR
function problem(x){
    if(isNaN(x) | x === ""){
     return "Error";
    } else {
     return(x * 50)+6
     }
    }

// OR
const problem = x => typeof x === 'number' ? x * 50 + 6 : 'Error';