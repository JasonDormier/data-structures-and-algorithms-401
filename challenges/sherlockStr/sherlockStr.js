'use strict';

//Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

const sherlock = s => {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        !map[s[i]] ? map[s[i]] = 1 : map[s[i]]++;
    }

    const key = Object.keys(map);
    let allowance = false;
    let value;

    if (map[key[0]] === map[key[1]] || key.length === 1) {
        value = map[key[0]];
    } else {
        map[key[0]]--;
        if (map[key[0]] === map[key[1]]) {
            value = map[key[0]];
            allowance = true;
        }
        else return 'NO';
    }

    console.log(value);
    for (let i = 1; i < key.length; i++) {
        if (map[key[i]] !== value && allowance) return 'NO'
        if (map[key[i]] !== value && !allowance) {
            map[key[i]]--;
            if (map[key[i]] === 0 || map[key[i]] === value) allowance = true;
            else return 'NO';
        }
    }
    return 'YES'
}

console.log(sherlock('aabbcd')); //no
console.log(sherlock('aabbccc')); //yes
console.log(sherlock('abc')); //yes
console.log(sherlock('aabbccddeefghi')); //no
console.log(sherlock('abcdefghhgfedecba')); //yes
console.log(sherlock('aabbc')); //yes
console.log(sherlock('abbac')); //yes
console.log(sherlock('aaaabbcc')); //no
console.log(sherlock('aaaaabc')); //no
console.log(sherlock('xxxaabbccrry')); //no
console.log(sherlock('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd')); //yes
console.log(sherlock('a')); //yes
console.log(sherlock('b')); //yes

