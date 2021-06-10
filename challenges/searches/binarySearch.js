'use strict';

function binarySearch(array, val){
    let a = 0;
    let b = array.length -1;
    let middle = Math.floor((a+b)/2);
    while(array[middle] !== val && a <= b){

        if(array[middle] < val){
            a = middle + 1;
        }else{
            b = middle -1; 
        }
        middle = Math.floor((a+b)/2);
    }

    if(array[middle] === val) return middle;
    else return -1;
}

console.log(binarySearch([1,2,3,4,5], 2));