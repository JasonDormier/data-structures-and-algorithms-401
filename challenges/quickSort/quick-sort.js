'use strict';

// function quickSort(items, left, right) {
//   var index;
//   if (items.length > 1) {
//     index = partition(items, left, right);
//     if (left < index - 1) {
//       quickSort(items, left, index - 1);
//     }
//     if (index < right) {
//       quickSort(items, index, right);
//     }
//   }
//   return items;
// }

// function partition(items, left, right) {
//   var pivot = items[Math.floor((right + left) / 2)],
//     i = left,
//     j = right;
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// function swap(items, left, right) {
//   var temp = items[left];
//   items[left] = items[right];
//   items[right] = temp;
// }

//my quickSort CockTail Quicksort

const cockTailQuickSort = (arr, left, right) => {
  if (left < right) {
    let i = qtPartition(arr, left, right);
    // console.log(arr[i]);
    // console.log(arr[i - 1]);
    // console.log(arr);
    cockTailQuickSort(arr, left, i - 1);
    cockTailQuickSort(arr, i, right);
  }
  return arr;
}

const median = (arr, left, right) => {
  let mid = Math.floor((left + right) / 2);
  if (arr[left] > arr[right]) [arr[left], arr[right]] = [arr[right], arr[left]];
  if (arr[left] > arr[mid]) [arr[left], arr[mid]] = [arr[mid], arr[left]];
  if (arr[mid] > arr[right]) [arr[mid], arr[right]] = [arr[right], arr[mid]];
  return mid;
}

const qtPartition = (arr, left, right) => {
  let pivot = median(arr, left, right);
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < arr[pivot]) {
      i++;
    }
    while (arr[j] > arr[pivot]) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}

//my quickSort
//left to right quickSort or Lomuto partition scheme

const quickSort = (arr, left, right) => {
  let i;

  if (left < right) { //if left is less the right, lets go
    i = partition(arr, left, right); // assign returned index from partition to i to be passed to our recursive calls.
    if (i - 1 > left ) quickSort(arr, left, i - 1); //if i is greater than 0 this is counting backwards, then we recurse the left side
    if (i + 1 < right) quickSort(arr, i + 1, right);// if i is less than arr.length or right, then we recurse the right side
  }
  return arr; //return our sorted array
}

const partition = (arr, left, right) => {
  medianOfThree(arr, left, right); // place the median at the end of the array or subarray
  const pivot = right;
  let i = left - 1;

  for (let j = left; j <= right - 1; j++ ) { //while j is less then right - 1, because we want it to stop one place before our pivot since our pivot is always at the end.
    if (arr[j] <= arr[pivot]) { //j is our front runner finding elements that should be on the left side of the array.
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]]; //swap j low value for, i the higher value.
    }
  }
  
  [arr[i+1], arr[pivot]] = [arr[pivot], arr[i+1]]; // j has reached right - 1, now we swap the arr[pivot] into place.

  return i + 1; //return i+1 so we can recurse with the correct starting and ending points for the left and right side.
}

const medianOfThree = (arr, left, right) => {
  const mid = Math.floor((left + right) / 2);
  if (arr[left] > arr[right]) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  if (arr[left] > arr[mid]) {
    [arr[left], arr[mid]] = [arr[mid], arr[left]];
  }
  if (arr[mid] > arr[right]) {
    [arr[mid], arr[right]] = [arr[right], arr[mid]];
  }
  [arr[mid], arr[right]] = [arr[right], arr[mid]];
  return arr;
}

const testQuickSort = (arr, left, right) => {
  let i;
  if(left < right) {
    i = testPartition(arr, left, right);
    if (i - 1 > left) testQuickSort(arr, left, i - 1);
    if (i + 1 < right) testQuickSort(arr, i + 1, right);
  }
  return arr;
}

const testPartition = (arr, left, right) => {
  const pivot = right;
  let i = left - 1;
  for (let j = left; j <= right - 1; j++) {
    if (arr[j] <= arr[pivot]) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[pivot]] = [arr[pivot], arr[i + 1]];
  return i + 1;
}


function hackerRankPartition(arr) {
  // Write your code here
  const pivot = 0;
  let i = 0;
  
  for(let j = 1; j < arr.length; j++) {
    console.log('j: ', j);
      if(arr[j] <= arr[pivot]){
        console.log('arr[j]:', arr[j], 'arr[pivot]:', arr[pivot]);
          i++;
          console.log('i: ', i);
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
  }
  [arr[pivot], arr[i]] = [arr[i],arr[pivot]];
  // console.log(arr);
  return arr;
}


function newQuickSort(arr, left = 0, right = arr.length - 1 ) {
  if (left < right) {
    const index = newPartition(arr, left, right);
    if (index - 1 > left) newQuickSort(arr, left, index - 1);
    if (index + 1 < right) newQuickSort(arr, index + 1, right);
  };
  return arr;
};

function newPartition(arr, left, right) {
  const pivot = right;
  let i = left - 1;
  
  for (let j = left; j < right; j++) {
    if (arr[j] <= arr[pivot]) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
  };

  [arr[i + 1], arr[pivot]] = [arr[pivot], arr[i + 1]];

  return i + 1;
}

const array = [8,5,9,7,1,4,2,10,3,6];
const array2 = [8,5,9,7,1,4,2,10,3,6];
const array3 = [4, 5, 3, 7, 2];
// const array = [7, 10, 8, 9];
//const array = [8, 42, 15, 16, 4, 23];

// console.log(medianOfThree([9, 4, 6],0,2));
// console.log(medianOfThree([8, 3, 5],0,2));
// console.log(medianOfThree([3, 8, 5],0,2));
// console.log(medianOfThree([5, 8, 3],0,2));
// console.log(medianOfThree([8, 5, 3],0,2));
// console.log(median([9, 4, 6],0,2));
// console.log(median([8, 3, 5],0,2));
// console.log(median([3, 8, 5],0,2));
// console.log(median([5, 8, 3],0,2));
// console.log(median([8, 5, 3],0,2));
// console.log(median([8,5,9,7,1,4,2,10,3,6],0,9));
// console.log(quickSort(array, 0, array.length - 1));
// console.log(array);
// console.log(testQuickSort(array, 0, array.length - 1));
// console.log(hackerRankPartition(array3));
//console.log(cockTailQuickSort(array2, 0, array2.length - 1));
console.log(newQuickSort(array));
console.log(newQuickSort(array2));
console.log(newQuickSort(array3));

module.exports = quickSort;