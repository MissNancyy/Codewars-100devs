// PROMPT:
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

// MY SOLUTION:
function nameShuffler(str){
    return str.split(' ').reverse().join(" ");
  }

// OR
const nameShuffler = str => str.split(' ').reverse().join(' ');

// OR
function nameSuffle(str){
    var arr = str.split(" ");
    return arr[1] + ' ' + arr[0]
  }


// OR
function nameSuffle(str){
    var spl = str.split(" "), out = [];//Splits str into array elements separated by " "
    for (var i = spl.length - 1; i >= 0; i--) {//Loop goes through the new array elements from end and pushes them to beginning of out array
      out.push(spl[i])//I used for loop because this way middle names are supported as well.
    }
    return out.join(" ")//joins out into string, with elements now separated by " "
  }