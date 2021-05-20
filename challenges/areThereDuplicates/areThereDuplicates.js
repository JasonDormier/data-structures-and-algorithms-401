'use strict';

function areThereDuplicate() {
  const holder = {};

  for (let i = 0; i < arguments.length; i++) {
    holder[arguments[i]] ? holder[arguments[i]] += 1 : holder[arguments[i]] = 1;

    if (holder[arguments[i]] > 1) {
      return true;
    }
  }
  return false;
}
module.exports = areThereDuplicate;


//one liner solution

function areThereDuplcatesOneLiner() {
  //because Set will only allow unique values.
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplcatesOneLiner(1, 2, 2));

