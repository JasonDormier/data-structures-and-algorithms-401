'use strict';

var checkArithmeticSubarrays = function(nums, l, r) {
    const results = [];

    for (let i = 0; i <= l.length; i++){
       // console.log(i);
        const arVal = [];
        let start = l[i];
        let end  = r[i];
        console.log('start: ', start, 'end: ', end);
        for(let j = start; j <= end; j++){
            arVal.push(nums[j]);
        }

        console.log('pre-sort: ', arVal);
        arVal.sort((a,b)=> a - b);
        console.log('post-sort: ', arVal);
        
        for(let k = 0; k < arVal.length; k++){
            let difference = arVal[k+1] - arVal[k];
            if(arVal[k+1])
            console.log('i round: ', i, 'k round: ', k);
            console.log(`${arVal[k+2]} - ${arVal[k+1]} = ${arVal[k+2] - arVal[k+1]} ?? ${difference}`);
            console.log(k+2, '???', arVal.length);
            if(k+2 >= arVal.length){
                results.push(true);
                break;
            }
            if(arVal[k+2] - arVal[k+1] !== difference){
                //console.log('false');
                results.push(false);
                break;
            }
        }
        
    }
    return results;
};

//console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]));
console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]));