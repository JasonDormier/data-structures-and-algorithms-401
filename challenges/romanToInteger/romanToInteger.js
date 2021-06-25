'use strict';

const romanToInt = (s) => {
  let num = 0;
  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  for (let i = 0; i < s.length; i++) {

    if (roman[s[i]] < roman[s[i + 1]]) {
      num += roman[s[i + 1]] - roman[s[i]];
      i++;
    }
    else num += roman[s[i]];
  }
  return num;
};

module.exports = romanToInt;