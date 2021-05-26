'use strict';

function longestSubString(str) {
  //create varibles one to return and one for the window
  let long = 0;
  let window = 0;
  const obj = {};

  //create an object to keep track of visited characters
  //create for loop to loop through the string
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      //move the window Math.max if a character is repeated
      window = Math.max(window, obj[str[i]]);
    }

    long = Math.max(long, i - window + 1);

    //store str[i] in the object
    obj[str[i]] = i + 1;

  }
  return long;
}
module.exports = longestSubString;