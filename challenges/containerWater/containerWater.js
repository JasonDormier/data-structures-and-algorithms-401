'use strict';

function container(height) {

    let left = 0, right = height.length - 1, maxArea = 0;

    while(left < right) {
        maxArea = Math.max(Math.min(height[left], height[right]) * (right - left), maxArea);
        height[left] < height[right] ? left++ : right--;
    }
    
    return maxArea;
};
console.log(container([1,8,6,2,5,4,8,3,7])); //49
console.log(container([1,1])); //1
console.log(container([4,3,2,1,4])); //16
console.log(container([1,2,1])); //2