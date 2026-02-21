'use strict';

const beautifulNumbers = (s) => {
    if (s[0] === '0' || s.length < 2) {
        console.log('NO');
        return;
    }

    const queries = s.split('\n');
    for (let i = 1; i < queries.length; i++) {
        const q = queries[i];
        console.log('q: ', q)
        let isBeautiful = false;
        let firstNumber
        
        for (let l = 1; l <= q.length / 2; l++ ) { //use this loop to find first num, if seq gets to q.length and does not eval to q firstnumber inceases by one, we will eval until we are half the length of q.
            firstNumber = q.slice(0, l);
            let num = BigInt(firstNumber);
            let seq = num.toString();

            while(seq.length < q.length) {
                num++
                seq += num.toString();

                if (seq === q) {
                    isBeautiful = true;
                    break;
                }
            }
        }
        console.log(isBeautiful ? `Yes ${firstNumber}` : 'No');
    }
}

console.log(beautifulNumbers('7\n1234\n91011\n99100\n101103\n010203\n13\n1'));
// YES 1
// YES 9
// YES 99
// NO
// NO
// NO
// NO

console.log(beautifulNumbers('4\n99910001001\n7891011\n9899100\n999100010001'));
// YES 999
// YES 7
// YES 98
// NO