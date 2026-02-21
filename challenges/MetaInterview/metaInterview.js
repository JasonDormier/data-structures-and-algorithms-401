'use strict';
//find the shortest distance between 0 and 1 or 1 and 0 and return the shortest distance in the array

const array = [ 0, 2, 3, 1, 5, 6, 0, 3, 0, 4, 4, 1]; //2
const array2 = [ 0, 1];//0
const array3 = [ 1, 0];//0
const array4 = [ 0, 2, 3, 5, 5, 6, 6, 3, 6, 4, 4, 1]; //10
const array5 = [ 0, 2, 3, 5, 5, 0, 6, 0, 6, 0, 4, 1];//1

const minDistance = (arr) => {
    let lastZero = -1; 
    let lastOne = -1; 
    let min = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            if(lastOne !== -1){
                min = Math.min(min, i - lastOne -1);
            }
            lastZero = i;
        }

        if (arr[i] === 1) {
            if(lastZero !== -1){
                min = Math.min(min, i - lastZero-1);
            }
            lastOne = i;
        }
    }
    return min;
}

console.log(minDistance(array));
console.log(minDistance(array2));
console.log(minDistance(array3));
console.log(minDistance(array4));
console.log(minDistance(array5));