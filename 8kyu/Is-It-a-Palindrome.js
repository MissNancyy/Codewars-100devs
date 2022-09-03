// PROMPT:
Write a function that checks if a given string (case insensitive) is a palindrome.
// MY SOLUTION: 
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  } 

// OR
const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

// OR
function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
  }