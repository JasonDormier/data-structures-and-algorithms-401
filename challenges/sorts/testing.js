'use strict'

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

function quickSort(arr, lo = 0, hi = arr.length - 1) {
    
    if (lo < hi) {
        const i = partition(arr, lo, hi);
        if (i - 1 > lo) quickSort(arr, lo, i - 1);
        if (i + 1 < hi) quickSort(arr, i + 1, hi);
    };
    
    return arr;
};

function partition(arr, lo, hi) {
    const pivot = hi;
    let i = lo - 1;

    for (let j = lo; j < hi; j++){
        if(arr[j] <= arr[pivot]) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[pivot]] = [arr[pivot], arr[i + 1]];

    return i + 1;
}

function mergeSort(arr) {
    if (arr.length > 1) {
        const mid = arr.length/2;
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        mergeSort(left);
        mergeSort(right);

        merge(arr, left, right);
    }
    return arr;
}

function merge(arr, left, right) {
    let i = 0, l = 0, r = 0;

    while(l < left.length && r < right.length) {
        left[l] < right[r] ? arr[i++] = left[l++] : arr[i++] = right[r++];
    }

    while (l < left.length) {
        arr[i++] = left[l++];
    }

    while (r < right.length) {
        arr[i++] = right[r++];
    }
}


const array = [6, 8, 3, 10, 2, 5, 9, 10, 11, 1, 4, 7];
const array1 = [34, 67, 23, 1, 89, 2, 36, 12, 121, 432, 564, 23, 8, 111, 90, 600, 17, 56, 97, 33, 45, 19, 20, 65, 71, 81, 101, 202, 303, 404, 505, 11, 22, 69, 77, 88, 99, 100, 200, 300, 400, 500];

const array2 = [455, 234, 123, 567, 21, 345, 678, 901, 789, 890, 12, 212, 312, 412, 512, 612, 55, 66, 76, 86, 96, 106, 216, 316, 416, 516, 616, 13, 24, 35, 46, 57, 68, 79, 91, 102, 203, 304, 405, 506];

const array3 = [607, 708, 809, 910, 111, 222, 333, 444, 555, 666, 777, 888, 999, 1010, 1212, 1313, 1414, 1515, 1616, 1717, 1818, 1919, 2020, 31, 42, 53, 64, 75, 86, 97, 108, 119, 130, 141, 152, 163, 174, 185, 196, 207, 218];

console.log(mergeSort(array));
console.log(mergeSort(array1));
console.log(mergeSort(array2));
console.log(mergeSort(array3));
// console.log(quickSort(array));
// console.log(quickSort(array1));
// console.log(quickSort(array2));
// console.log(quickSort(array3));
// console.log(insertionSort(array));
// console.log(insertionSort(array1));
// console.log(insertionSort(array2));
// console.log(insertionSort(array3));


function binarySearch (arr, val) {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {

        let mid = Math.floor((lo + hi)/2);

        if (arr[mid] === val) return mid;
        arr[mid] < val ? lo = mid + 1 : hi = mid - 1;
    }
    return -1;
}

console.log(binarySearch(array, 12));
console.log(binarySearch(array1, 90));
console.log(binarySearch(array2, 789));
console.log(binarySearch(array3, 1313));