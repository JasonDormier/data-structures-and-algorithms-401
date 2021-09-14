'use strict';

const numPlayers = (k, scores) => {

    let currentStanding = [];
    let rank = 1;
    let counter = 1;
    let sortedScores = scores.sort((a, b) => b - a);
  
    for (let i = 0; i < sorted.length; i++) {
      currentStanding.push([rank, sorted[i]]);
      currentStanding[currentStanding.length] = [rank, sortedScores[i]];
      if (sorted[i] !== sorted[i + 1]) {
       rank += counter;
       counter = 1;
      }
      else {
        counter++;
      }
    }
  
    let result = 0;
    for (let i = 0; i < currentStanding.length; i++) {
      if (currentStanding[i][0] <= k && currentStanding[i][1] !== 0) result++;
    }
  
    return result;
  };

  const getAnagram = s => {
      const string = s.toString();
      const mid = string.length/2;
      const compare = {};
      let counter = 0;
      
      for (let i = 0; i <= mid-1; i++) {
          let str = string[i];
            compare[str] ? compare[str] += 1 : compare[str] = 1;  
      }

      for (let i = mid; i < string.length; i++) {
          let str = string[i];
          if(!compare[str]){
            counter++;
          } 
      }
      
      return counter;
  }
  console.log(getAnagram(123456)); // 3 operations
  console.log(getAnagram(123321)); // 0 operations
  console.log(getAnagram(1234564321)) //1
  