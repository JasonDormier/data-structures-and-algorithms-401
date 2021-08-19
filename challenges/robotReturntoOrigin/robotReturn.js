'use strict';
// return true of the input retunrs the robot to 0,0 false if it does not.
//U would be --
//D would be ++
//L would be --
//R would be ++

const robotReturn = (moves) => {
    const board = [0,0];
    for(let i = 0; i <= moves.length; i++){
        if(moves[i] === 'U') board[0]--;
        if(moves[i] === 'D')board[0]++;
        if(moves[i] === 'L')board[1]--;
        if(moves[i] === 'R') board[1]++;
    }
    if(board[0] === 0 && board[1] === 0)return true;
    else return false;
    ///return board[0] === 0 && board[1] === 0 ? false : true;
}
console.log(robotReturn('U')); //false
console.log(robotReturn('UD')) //true
console.log(robotReturn('LL'))//false
console.log(robotReturn('RRDD'))//false
console.log(robotReturn('LDRRLRUULR'))//false
console.log(robotReturn('UULLDDRR')) //true