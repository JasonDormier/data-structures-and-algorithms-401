'use strict';
//const array = [234, 43, 55, 63, 5, 6, 235, 547, 1];
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];// store current so we can swap it at the end.
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {// while j which is arr[i-1] is not at the greater or = to 0 meaning it will loop until itis -1, and while arr[j] which is arr[i-1] is greater the current arr[i] 
            arr[j + 1] = arr[j];//swap the current smaller value with the previous smaller value
            j--;
        }
        arr[j + 1] = current;//when all the swapping is complete assign 
    }
    console.log(arr.join(' '));
    return arr;
}

// const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
const array = [6, 8, 3, 10, 2, 5, 9, 10, 11, 1, 4, 7];
// console.log(insertionSort(array));
console.log(testInsertionSort(array));

function testInsertionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        let j = i - 1;
        
        while (j >= 0 && cur < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = cur;
    }
    return arr;
}
