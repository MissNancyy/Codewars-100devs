// PROMPT:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

// MY SOLUTION:
function solution(str){
    return str.split('').reverse().join('');  
  }

// OR
const solution = str => str.split('').reverse().join('');

// OR
function solution(str){
    let arr = []
    for(let i = 0; i < str.length; i++) {
      arr.unshift(str[i])
      }
      return arr.join('')
    }