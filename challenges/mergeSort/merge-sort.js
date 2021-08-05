'use strict';

function mergeSort(lists) {
  let n = lists.length;
  //console.log(n);

  if (n > 1) {
    let mid = n / 2;
    let left = lists.slice(0, mid);
    let right = lists.slice(mid);

    //console.log('lists: ', left, right, lists);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, lists);
  }
  return lists;
}

function merge(left, right, lists) {
  let i = 0;
  let j = 0;
  let k = 0;


  while (i < left.length && j < right.length) {
    //console.log(lists[j]);

    if (left[i] <= right[j]) {
      lists[k] = left[i];
      i = i + 1;

    } else {

      lists[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  while (i < left.length) {
    lists[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    lists[k] = right[j];
    j++;
    k++;
  }
}

module.exports = mergeSort;