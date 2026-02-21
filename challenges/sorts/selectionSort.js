'use strict';

const array = [234, 43, 55, 63, 5, 6, 235, 547];

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr);
        //console.log('arr i: ', arr[i]);
        let minVal = i;
        //let index;
        for (let j = i; j < arr.length - 1; j++) {
            // console.log('j value: ', arr[j]);
           // console.log('min value: ', arr[minVal]);
            if(arr[j] < arr[minVal]){
                minVal = j;
                //console.log('minVal: ', arr[minVal]);
            }
        }// forgot to swap values

        if(arr[minVal] !== arr[i]){
            // let temp = arr[i];
            // arr[i] = arr[minVal];
            // arr[minVal] = temp;
            [arr[i], arr[minVal]] = [arr[minVal], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort(array));