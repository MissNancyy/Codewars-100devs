// PROMPT: Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// EXAMPLE (what this question means and is asking for): 
//   348597 => [7,9,5,8,4,3]
//    0 => [0]

// MY SOLUTION: 
function digitize(n) {
    let num = String(n);
      let arr = [];
      for(let i=0;i<num.length;i++){
          let snum = Number(num.charAt(i));
          arr.push(snum)
      }
      arr.reverse();
      return arr
  }
  
