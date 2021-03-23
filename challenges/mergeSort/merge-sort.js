'use strict';

function mergeSort(arr) {
  let n = arr.length;
  //console.log(n);

  if (n > 1) {
    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    //console.log('arr: ', left, right, arr);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;


  while (i < left.length && j < right.length) {
    //console.log(arr[j]);

    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;

    } else {

      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }

  // if (i === left.length) {
  //   for (j in right) {
  //     arr[k] = right[j];
  //   }

  // } else {
  //   for (i in left) {
  //     arr[k] = left[i];
  //   }
  // }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

module.exports = mergeSort;