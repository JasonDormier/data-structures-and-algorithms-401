'use strict';

function mergeSort(lists) {
  let n = lists.length;

  if (n > 1) {
    let mid = Math.ceil(n / 2);
    let left = lists.slice(0, mid);
    let right = lists.slice(mid);

    console.log('lists: ', left, right, lists);
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
    console.log('sorting: ', lists);

    if (left[i] <= right[j]) {
      lists[k] = left[i];
      i++;

    } else {

      lists[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    console.log('sorting left: ', left);
    console.log('sorting left list: ', lists);
    lists[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    console.log('sorting right: ', right);
    console.log('sorting right list: ', lists);
    lists[k] = right[j];
    j++;
    k++;
  }
}

const arr = [12, 9, 4,3,6,2,10,11,1,7,8,5];
console.log(mergeSort(arr));

module.exports = mergeSort;