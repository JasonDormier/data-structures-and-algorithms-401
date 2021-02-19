function insertShiftArray(arr, val) {
  let result = [];
  const mid = Math.ceil(arr.length / 2);
  for (let i = 0; i < mid; i++) {
    result[result.length] = arr[i];
  }
  result[mid] = val;
  for (let i = mid; i < arr.length; i++) {
    result[result.length] = arr[i];
  }
  return result;
}
module.exports = insertShiftArray;
