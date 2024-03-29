'use strict';

const largestRectangle = (heights) => {

    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        let width = 1;

        //check all of the indexs infront of current height
        //if they are < current height keep adding to width
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[i] > heights[j]) break;
            width++;
            
        }
        //check all of the indexs behing current height
        //if they are < current height keep adding to width
        for (let k = i-1; k >= 0; k--){
            if(heights[i] > heights[k]) break;
            width++;
        }
        //multiply current height * width 
        maxArea = Math.max(maxArea, heights[i]* width);
    }
    return maxArea;
}

console.log(largestRectangle([2, 1, 5, 6, 2, 3]));
console.log(largestRectangle([2, 4]));
console.log(largestRectangle([2, 4, 4, 5, 6, 7, 8]));
console.log(largestRectangle([8, 7, 6, 5, 4, 4, 2]));