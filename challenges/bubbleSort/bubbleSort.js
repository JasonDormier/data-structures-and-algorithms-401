// Creating the bblSort function
function bblSort(arr) {
 
    for (var i = 0; i < arr.length; i++) {
        console.log(arr);
        console.log('arr[i]: ', arr[i]);
        console.log('evaluation: ', arr.length-i-1);
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
            console.log('arr[j]: ', arr[j], 'arr[j+1]: ', arr[j+1]);
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
 
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
 
    // Print the sorted array
    console.log(arr);
}

const bbbleSort = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {

        let swap = false;

        for (let j = 1; j <= arr.length - 1 - i; j++) {

            if (arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                swap = true;
            }
        }
        
        if (!swap) break;
    }
    return arr;
}
// This is our unsorted array
const arr = [234, 43, 55, 63, 5, 6, 235, 547];
const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr3 = [5, 3, 1, 2, 6, 9, 8, 7, 4];

 
// Now pass this array to the bblSort() function
//console.log(bblSort(arr));
console.log(bbbleSort(arr));
console.log(bbbleSort(arr2));
console.log(bbbleSort(arr3));