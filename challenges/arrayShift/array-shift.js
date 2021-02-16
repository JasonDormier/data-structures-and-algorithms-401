function insertShiftArray(arr, val) {
  const middle = arr.length / 2;
  const middleIndex = Math.ceil(middle);
  arr.splice(middleIndex, 0, val);
  return arr;
}
module.exports = insertShiftArray;