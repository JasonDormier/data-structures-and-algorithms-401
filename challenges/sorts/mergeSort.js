'use strict';

const mergeSort = (arr) => {

    if(arr.length > 1){//when recursion breaks the arrays down to one element in an array, stop
        let mid = arr.length/2 //this will round down if math.ceil is not applied
        const left = [], right = [];

        for (let i = 0; i < arr.length; i++){
            if(i < mid){
                left[left.length] = arr[i];
            }else{
                right[right.length] = arr[i];
            }
        }
        mergeSort(left);
        mergeSort(right);
        merge(left, right, arr);
    }
   return arr;
}

//helper function
function merge(left, right, arr) {
    let i = 0, l = 0, r = 0;
    while(l < left.length && r < right.length) {
        if (left[l] < right[r]){
            arr[i] = left[l];
            l++;
            i++
        } else {
            arr[i] = right[r];
            r++;
            i++;
        }
    }
    
    //handle remerging sorted arrays that are already sorted or uneven at the bottom of the stack. When the left side finishs long before the right side the left side while loop will fire to merge the left and the right side.
    while(l < left.length) {
        arr[i] = left[l];
        l++;
        i++;
    }

    while(r < right.length){
        arr[i] = right[r];
        r++;
        i++;
    }
}


//test
const testMergeSort = (arr) => {
    //recursive basecase
    if (arr.length > 1) {
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        testMergeSort(left);
        testMergeSort(right);
        testMerge(arr, left, right);
    }
    return arr;
}

const testMerge = (arr, left, right) => {
    let i = 0; let l = 0; let r = 0;

    while (l < left.length && r < right.length) {
        if(left[l] < right[r]) {//compare sub arrays;
            arr[i] = left[l]; //swap sub array l value with arr i value;
            i++; l++;
        } else {
            arr[i] = right[r];
            i++; r++;
        }
    }
    while (l < left.length) {
        arr[i] = left[l];
        i++; l++;
    }
    while (r < right.length) {
        arr[i] = right[r];
        i++; r++;
    }
}

const DTmergeSort = (arr) => {
    if(arr.length > 1) {
        const mid = arr.length/2;
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        
        DTmergeSort(left);
        DTmergeSort(right);
        DTmerge(arr, left, right);
    }
    return arr;
}

const DTmerge = (arr, left, right) => {
    let i = 0, l = 0, r = 0;

    while (l < left.length && r < right.length) {
        left[l] < right[r] ? arr[i++] = left[l++] : arr[i++] = right[r++];
    }

    while(l < left.length) arr[i++] = left[l++];
    while(r < right.length) arr[i++] = right[r++];
}
// const arr = [12, 9, 4,3,6,2,10,11,1,7,8,5];
// const arr = [2,1];
// const arr = [5, 3, 17, 1, 72, 2, -17, -2, -1];
const arr = [6, 8, 3, 10, 2, 5, 9, 7, 11, 1, 4];

console.log(DTmergeSort(arr));
// console.log(testMergeSort(arr));
// console.log(mergeSort(arr));