'use strict';

//detemine if two strings have a common substring, a single letter counts as a common sub str

const twoSrtings = (s1, s2) => {
    for (let char in s1){
        if(s2.includes(s1[char])) return 'YES';
    }
    return 'NO';
}

console.log(twoSrtings('art', 'cat')); //yes
console.log(twoSrtings('be', 'cat')); //no
console.log(twoSrtings('hello', 'world')); //no
console.log(twoSrtings('hi', 'world')); //no