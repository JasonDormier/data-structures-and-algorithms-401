'use strict';

// const minSwaps = arr => {
//     let min = Infinity
//     const map = {};
//     const keyMap = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//     } 

//     for (let i = 0; i < arr.length; i++) {
//         map[min] = arr[i];
//         console.log(`map-> ${min} : ${arr[i]}, keyMap->${arr[i]} : ${min}`)
//         keyMap[arr[i]] = min++;

//     }

//     console.log('   map: ', map);
//     console.log('keyMap: ', keyMap);
//     let result = 0;
//     for (let key in map) {
//         //console.log(`   map:  {  ${key} : ${map[key]}},{ ${keyMap[key]}: ${map[keyMap[key]]}} {${keyMap[map[key]]}} {${keyMap[key]}}`);
//         console.log(`   ${keyMap[map[key]]}, ${keyMap[key]}`);
//         if (+key !== map[key]){
//             // const temp = map[key];
//             // map[key] = map[keyMap[key]];
//             // map[keyMap[key]] = temp;

//             //[keyMap[key], keyMap[map[key]]] = [map[key]], map[keyMap[key]];
//             //[keyMap[key], keyMap[map[key]]] = [keyMap[map[key]], keyMap[key]];
//             [map[key], map[keyMap[key]]] = [map[keyMap[key]], map[key]];
//             [keyMap[map[key]], keyMap[map[keyMap[key]]]] = [map[key], map[keyMap[key]]];
            
//             console.log(map[key], map[keyMap[key]]);
//             console.log('   map: ', map);
//             console.log('keyMap: ', keyMap);
//             result++;
//         }
//     }
//     console.log(map);
//     console.log(result);
    
// }
const minSwaps = arr => {

    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (i + 1 === arr[j]){ 
                [arr[i], arr[j]] = [arr[j], arr[i]];
                result++;
                break;
            }
        }
    }
    return result;
}

console.log(minSwaps([4, 3, 1, 2])) //3
//1, 3, 4, 2
//1, 4, 3, 2
//1, 2, 3, 4
console.log(minSwaps([2, 3, 4, 1, 5])) //3
// //3, 2, 4, 1, 5
// //3, 2, 1, 4, 5
// //1, 2, 3, 4, 5
console.log(minSwaps([1, 3, 5, 2, 4, 6, 7])) //3
// //1,5,3,2,4,6,7
// //1,2,3,5,4,6,7
// //1,2,3,4,5,6,7

console.log(minSwaps([90, 98, 92, 94, 93, 95, 96, 91, 97, 99])) //3
//90, 91, 92, 94, 93, 95, 96, 98, 97, 99
//90, 91, 92, 93, 94, 95, 96, 98, 97, 99
//90, 91, 92, 93, 94, 95, 96, 97, 98, 99