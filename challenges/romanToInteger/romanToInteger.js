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

console.log(romanToInt('III'));
console.log(romanToInt('VI'));
console.log(romanToInt('X'));
console.log(romanToInt('XIII'));
console.log(romanToInt('XV'));
console.log(romanToInt('XXX'));
console.log('');
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('XL'));
console.log(romanToInt('ML'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));


module.exports = romanToInt;