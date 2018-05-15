/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n);
    let solutions = [];
    for(let i=0; i<n; i++){
        board[i] = new Array(n);
        for(let j=0; j<n; j++){
            board[i][j] = '.';
        }
    }

    function isValid(board, row, col){
        let i,j;
        /* Check this row on left side */
        for (i = 0; i < col; i++){
            if (board[row][i] === 'Q') return false;
        }
        /* Check upper diagonal on left side */
        for (i=row, j=col; i>=0 && j>=0; i--, j--){
            if (board[i][j] === 'Q') return false;
        }
        /* Check lower diagonal on left side */
        for (i=row, j=col; j>=0 && i<n; i++, j--){
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    function solve(board, col){
        if(col === n){ // all queens are positioned, we found a solution
            solutions.unshift(board.map(row => row.join('')));
            return true;
        }
        // fort this column, try all possibilities
        for(let i = 0; i<n; i++){
           if(isValid(board, i, col)){
                board[i][col] = 'Q';
                solve(board, col+1)
                board[i][col] = '.'; // backtrack
           }
       }
       return false;
    }

    solve(board, 0);
    return solutions;
};
