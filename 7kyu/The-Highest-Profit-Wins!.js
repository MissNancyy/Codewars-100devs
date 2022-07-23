// PROMPT:

// MY SOLUTION:
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
   }

// OR
function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
  }

// OR
function minMax(arr) {
    var a = arr.sort(function(a,b) {return a-b});
    return [a[0], a[a.length-1]];
  }

// OR
const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];

// OR
function minMax(arr){
    var max = arr[0], min = arr[0];
    for(var i=0; i<arr.length; i++) {
      if(arr[i]>max) max = arr[i];
      if(arr[i]<min) min = arr[i];
    }
    return [min,max];
  }

// OR
function minMax(arr){
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);
    return [min, max];
  }