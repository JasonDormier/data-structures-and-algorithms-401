'use strict';

const studentGrading = (grades) => {
    const newGrades = [];
    for (let i = 1; i < grades.length; i++) {
        if(grades[i] >= 38 && Math.ceil(grades[i]/5)*5 - grades[i] < 3){
            newGrades[newGrades.length] =  Math.ceil(grades[i]/5)*5;
        }
        else newGrades[newGrades.length] = grades[i];
    }
    return newGrades;
}

console.log(studentGrading([4,73,67,38,33]));
//console.log(studentGrading([ 73, 67, 38, 33 ]));