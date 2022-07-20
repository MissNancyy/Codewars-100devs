// PROMPT:
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

// MY SOLUTION:
function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }


// OR
function updateLight(current) {
    return ({
      green: 'yellow',
      yellow: 'red',
      red: 'green'
    })[current]
  }

// OR
function updateLight(current) {
  
    //your code here!
    return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';
  
  }

// OR
function updateLight(current) {
  
    switch (current) {
    case 'green':
    return 'yellow';
    case 'yellow':
    return 'red';
    case 'red':
    return 'green';
    }
   
   }

// OR
const updateLight = current => current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';