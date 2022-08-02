// PROMPT:



// MY SOLUTION: 
const data = [17, 17, 3, 17, 17, 17, 17];
const stray = nums => nums.reduce((a, b) => a ^ b);


const res = stray(data);

console.log(res);

// OR
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }

// OR
const stray = nums => nums.reduce((a, b) => a ^ b);


// OR
function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
  }

// OR
function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
  }

// OR
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

// OR
function stray(numbers) {
    var sort = numbers.sort();
    if (sort[0] === sort[1]) {
      return sort[sort.length-1]
    }  else {
      return sort[0]
    }
      
    }