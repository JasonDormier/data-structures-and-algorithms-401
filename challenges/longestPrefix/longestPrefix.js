'use strict';


const longestPrefix = (strs) => {

    let prefix = ''

    if (strs.length === 0) return prefix;

    let min = strs[0].length;
    let shortestWord = 0;
    let index;

    for (let num in strs) {
        //console.log(str[num].length);
        if (strs[num].length <= min) {
            min = strs[num].length;
            shortestWord = strs[num];
            index = num;
        }

    }

    for (let i = 0; i < shortestWord.length; i++) {

        const compare = strs[index][i];

        for(let j = 0; j < strs.length; j++){
            console.log(strs[j][i]);

            if(strs[j][i] !== compare) return prefix;
        }

        prefix += compare;
    }
    return prefix;
}

console.log(longestPrefix(["flower", "flow", "flight"]));
console.log(longestPrefix([""]));
console.log(longestPrefix(['a']));

module.exports = longestPrefix;