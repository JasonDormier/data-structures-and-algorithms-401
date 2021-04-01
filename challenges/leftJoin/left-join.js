'use strict';

function leftJoin(tableOne, tableTwo) {
    const returnArray = [];
    for (let i = 0; i < tableOne.buckets.length; i++) {
        const innerArray = [];
        if (tableOne.buckets[i] !== undefined) {
            let key = (Object.keys(tableOne.buckets[i].head.value)[0]);
            innerArray.push(key);
            innerArray.push(tableOne.buckets[i].head.value[key]);
            if (tableTwo.contains(key)) {
                innerArray.push(tableTwo.get(key));
            } else {
                innerArray.push(null);
            }
            returnArray.push(innerArray);
        }
    }
    return returnArray;
}
module.exports = leftJoin;