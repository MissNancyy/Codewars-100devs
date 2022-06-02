// PROMPT: Given a year, return the century it is in.

//EXAMPLE: 
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 

// MY SOLUTION: 
const century = year => Math.ceil(year/100) 