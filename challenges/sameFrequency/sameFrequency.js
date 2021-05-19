'use strict';

function sameFrequency(int1, int2) {

  const intOne = int1.toString();
  const intTwo = int2.toString();

  if (intOne.length !== intTwo.length) {
    return false;
  }

  const compare = {};
  for (let i = 0; i < intOne.length; i++) {
    compare[intOne[i]] ? compare[intOne[i]] += 1 : compare[intOne[i]] = 1;
  }

  for (let i = 0; i < intTwo.length; i++) {
    if (!compare[intTwo[i]]) {
      return false;
    } else {
      compare[intTwo[i]] -= 1;
    }
  }
  return true;
}

module.exports = sameFrequency;