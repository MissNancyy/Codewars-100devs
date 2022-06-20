// PROMPT: Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// EXAMPLE: 
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// MY SOLUTION: 
smash = function (words) {
    return words.join(" ");
  }; 

// OR 
const smash = words => words.join(' ');

function smash (words) {
    "use strict";
    return words.join(' ');
}; 

