'use strict';

const array = [234, 43, 55, 63, 5, 6, 235, 547];

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let swap = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;
}

console.log(bubbleSort(array));
