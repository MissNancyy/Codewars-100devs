// PROMPT:
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1

// MY SOLUTION:
function strCount(str, letter) {
    let arr = str.split("");
    //console.log(arr)
    let finalArr = arr.filter((char) => letter === char);
    //console.log(finalArr);
    return finalArr.length;
  }

// OR
function strCount(str, letter){  
    return str.split(letter).length-1
  }

// OR
function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
  }

// OR
function strCount(str, letter){  
  
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    
    return count;
    
  }