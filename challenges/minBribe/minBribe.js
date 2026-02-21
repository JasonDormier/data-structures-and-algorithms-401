'use strict';

const minBribe = q => {
    let bribe = 0;
    let chaos = false;
    for (let i = 0; i < q.length; i++) {
        const calc = q[i] - (i + 1);
        //console.log('calc: ', calc)
        if (q[i] !== i+1) {
            if (calc > 2) {
                chaos = true;
                break;
            }
        }

        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribe++;
            }
        }
    }
    console.log(`${!chaos ? bribe : 'Too chaotic'}`);
}

console.log(minBribe([ 2, 1, 5, 3, 4 ])); //3
console.log(minBribe([ 2, 5, 1, 3, 4 ])); //Too Chaotic
console.log(minBribe([ 5, 1, 2, 3, 7, 8, 6, 4])); //Too Chaotic
console.log(minBribe([ 1, 2, 5, 3, 7, 8, 6, 4 ])); //7
console.log(minBribe([ 1, 2, 5, 3, 4, 7, 8, 6])); //4

//1 2 3 4 5 6 7 8 //2
//1 2 5 3 4 6 7 8 //2
//1 2 5 3 7 4 6 8 //2
//1 2 5 3 7 6 4 8 //1
//1 2 5 3 7 8 6 4 //2

