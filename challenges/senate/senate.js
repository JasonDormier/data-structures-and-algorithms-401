'use strict';


function predictPartyVictory(senate) {
    
    const d = [], r = [];
    for (let i = 0; i < senate.length; i++) {
        senate[i] === 'R' ? r.push(i) : d.push(i);
    }

    while (d.length > 0 && r.length > 0) {
        const rVote = r.shift(), dVote = d.shift();

        dVote < rVote ? d.push(dVote + senate.length) : r.push(rVote + senate.length);
    }

    return d.length > 0 ? 'Dire' : 'Radiant';
}

console.log(predictPartyVictory("RDD")); //Dire
console.log(predictPartyVictory("RDDRDDRRRDRD")); //Dire
console.log(predictPartyVictory("RDR")); //Radiant
console.log(predictPartyVictory("DR")); //Dire



// const R = [];
// const D = [];
// const n = senate.length;

// // Add senators to respective queues
// for (let i = 0; i < n; i++) {
//     if (senate[i] === "R") {
//         R.push(i);
//     } else {
//         D.push(i);
//     }
// }

// // Simulate the voting process
// while (R.length > 0 && D.length > 0) {
//     console.log('R: ', R, 'D: ', D);
//     const rIndex = R.shift();
//     const dIndex = D.shift();
    
//     if (rIndex < dIndex) {
//         R.push(rIndex + n);
//     } else {
//         D.push(dIndex + n);
//     }
//     console.log('R: ', R, 'D: ', D);
//     console.log('======================');
// }

// console.log('final, R: ', R, 'D: ', D);
// return R.length > 0 ? "Radiant" : "Dire";