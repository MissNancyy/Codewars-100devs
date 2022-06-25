// PROMPT: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// MY SOLUTION: 
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// OR 

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }


// or 
function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;

// OR

function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
  }

// OR
function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
      x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
  }

// OR

fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join(''); 