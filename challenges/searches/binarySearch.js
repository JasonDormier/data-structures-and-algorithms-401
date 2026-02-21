'use strict';

function binarySearch(array, val) {
    let a = 0;
    let b = array.length - 1;
    let middle = Math.floor((a + b) / 2);
    while (array[middle] !== val && a <= b) {

        if (array[middle] < val) {
            a = middle + 1;
        } else {
            b = middle - 1;
        }
        middle = Math.floor((a + b) / 2);
    }

    if (array[middle] === val) return middle;
    else return -1;
}

const testBinarySearch = (arr, key) => { //would not work if you want the index number
    //recursive base cases
    const mid = Math.floor(arr.length/2);
    if (arr[mid] === key) return `the keys exist: ${true}`;
    else if (arr.length === 1) return `the keys exist: ${false}`;
    else if (arr[mid] > key) {
        return testBinarySearch(arr.slice(0, mid), key);
    }
    else return testBinarySearch(arr.slice(mid + 1), key);
}

const testBinarySearch2 = (arr, key, start, end) => {
    const mid = Math.floor((start + end) / 2);
    console.log(`start: ${start}, end: ${end}, mid: ${mid}, key: ${key}`);

    if (arr[mid] === key) return `The index number of the key is ${mid}`;
    else if (start === end) return -1;
    else if (arr[mid] > key) {
        end = mid - 1;
        return testBinarySearch2(arr, key, start, end)
    } else {
        start = mid + 1;
        return testBinarySearch2(arr, key, start, end);
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const arr = [1, 2, 3, 4, 5];
//console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(testBinarySearch([1, 2, 3, 4, 5], 4));
console.log(testBinarySearch2(arr, 8, 0, arr.length));