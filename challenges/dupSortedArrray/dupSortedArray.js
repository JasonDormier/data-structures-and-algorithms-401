'use strict';

//returns with mutated array
function dups(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

//returns with a new array
function dupsNew(array) {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) temp[temp.length] = array[i];
    }
    temp = array;
    return array;
}
console.log(dups([1, 2, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 8]))
console.log(dups([1, 1, 2]))
console.log(dupsNew([1, 2, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 8]))