'use strict';

// Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome. There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.
//example:  dcdc;
//you can remove d from the front or c from the back
//return the index

// const palindromeIndex = s => {

//     let i = 0;
//     let j = s.length - 1;
//     let iMoved = false;
//     const arr = [];
    
//     while (i <= j) {
//         if (s[i] === s[j]){
//             i++; j--;
//         }

//         if (s[i] !== s[j] && !iMoved){
//             arr.push(i);
//             i++;
//             iMoved = true;
//         } 
//         if(s[i] !== s[j] && iMoved){
//             i = arr[0];
//             j = (s.length - 1) - arr[0];
//             arr.push(j);
//             j--;
//         }
//     }
//     return arr.length > 0 ? arr[arr.length -1] : -1;
// }
const isPalindrome = (str, start, end) => {
    while(start <= end) {
        if(str[start] !== str[end]) return false;
        start++; end--;
    }
    return true;
}
const palindromeIndex = s => {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        if(s[i] !== s[j]){
            if (isPalindrome(s, i + 1, j)) return i;
            if (isPalindrome(s, i, j - 1)) return j;
        }
        i++; j--;
    }
    return -1;
}

// const isPalindrome = (str, start, end) => {
//     while (start < end) {
//         if (str[start] !== str[end]) return false;
//         start++;
//         end--;
//     }
//     return true;
// };

// const palindromeIndex = s => {
//     let i = 0;
//     let j = s.length - 1;

//     while (i < j) {
//         if (s[i] !== s[j]) {
//             if (isPalindrome(s, i + 1, j)) return i;
//             if (isPalindrome(s, i, j - 1)) return j;
//             return -1;
//         }
//         i++;
//         j--;
//     }
//     return -1;
// };





console.log(palindromeIndex('aaab')); //3
console.log(palindromeIndex('baa'));  //0
console.log(palindromeIndex('aaa')); //-1

console.log(palindromeIndex('fyjwtatuieusvfqaeynaaiiaanyeaqfvsueutatwjyf')); //8
console.log(palindromeIndex('qaaiyrpadovfjrmgkildtkseysejdtrpltptujlxxljutptlprtdjesyeskdlikgmrjfvodapryiaaq'));//20
console.log(palindromeIndex('llhrxcreddwkcronujfkwbdswoowsdbwkfjunorckwdderxrhll'));//5
console.log(palindromeIndex('qasfhkfcojhntlfkaydtepsfsleipymwsopposwmypielsfspetdykfltnhjocfkhfsaq'));//16
console.log(palindromeIndex('broifqivnnvifiorb'));//5
console.log(palindromeIndex('bglgcwnmpobohqefrglsaaaaslgrfeqhobopmnwcglgb'));//-1
console.log(palindromeIndex('bthvmywukfwrkslaiialskwfkuwymvhtb'));//11
console.log(palindromeIndex('uxxdlselxmwyiguugtpsypfudffswvwyswyyiiyywsywvsffdufpysptguugiywmxlesldxxu'));//28
console.log(palindromeIndex('rvscdpyljqglgmiktfndsmfnkgmubrruloqptgohsgneocoyyocoengshogtpqolurrbumgknfmsdntkimglgqjlypdcsvr'));//17
console.log(palindromeIndex('qmdpbsswvmqtyhkobqeijjieqbokhytqmvwssbdmq'));//3


console.log(palindromeIndex('hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh'));//44
//         i
// hgygsvlfcwnswtuhmyaljkqlqj
//         j
// hgygsvlfwcwnswtuhmyakjkqlqj
// jqlqkjlaymhutwsnwcwflvsgygh