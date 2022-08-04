// PROMPT:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

// MY SOLUTION:
function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }
  
    return vowelsCount;
  }

// OR
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

// OR
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }


// OR
function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
  }