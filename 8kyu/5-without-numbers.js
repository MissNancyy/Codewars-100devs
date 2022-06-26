// PROMPT: Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)


// MY SOLUTION: 
function unusualFive() {
    let arr = ['a','b','c','d','e']
    return arr.length
  }


// OR 
const unusualFive = () => 'How do you do bro?'.split(' ').length

// OR

const unusualFive = () =>
  Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI));

// OR
function unusualFive() {
    return Math.hypot(Math.ceil(Math.E), Math.ceil(Math.PI)); 
  }

// OR

function unusualFive() {
    return "kitty".length
  }

