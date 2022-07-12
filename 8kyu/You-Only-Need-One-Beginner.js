// PROMPT:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.



// MY SOLUTION:
function check(a, x) {
    // your code here
    return a.indexOf(x) > -1 ? true : false
  }

// OR
function check(a,x){
    return a.includes(x);
  };

// OR
const check = (a,x) => a.includes(x);

// OR
function check(a,x){
    var result = false;
    for(i = 0; i < a.length; i++){
      if(a[i]==x){
      result  = true;
      }
     
    }
    return result;
  };
  check([1, "hey", false], 1);

// OR
function check(a, x) {
    let b = a.findIndex(el => el == x);
    return b < 0 ? false : true;
  }