/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const seenRows = new Array(9);
    const seenCols = new Array(9);
    const seenSquares = new Array(9);
    for(let i=0; i<9; i++){
        seenRows[i] = new Array(9);
        seenCols[i] = new Array(9);
        seenSquares[i] = new Array(9);
    }
    let valid = true;
    loop: {
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                let idx = parseInt(board[i][j]);
                if(Number.isInteger(idx)){
                    let square = (Math.trunc(i/3)*3)+Math.trunc(j/3);
                    if(seenRows[i][idx] || seenCols[j][idx] || seenSquares[square][idx]){
                        valid = false;
                        break loop;
                    } else {
                        seenRows[i][idx] = true;
                        seenCols[j][idx] = true;
                        seenSquares[square][idx] = true;
                    }
                }
            }
        }
    }
    return valid;
};

console.log(isValidSudoku([".........","......3..","...18....","...7.....","....1.97.",".........","...36.1..",".........",".......2."]));
