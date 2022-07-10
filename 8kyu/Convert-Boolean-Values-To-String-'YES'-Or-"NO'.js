// PROMPT: 
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// MY SOLUTION: 
function boolToWord( bool ){
    //...
    if (bool === true){
      return 'Yes'
    }
    else {
      return 'No'
    }
  }

// OR
function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }

// OR
function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

// OR
const boolToWord = bool => bool ? 'Yes' : 'No';

// OR
let boolToWord = bool => bool ? 'Yes' : 'No';
