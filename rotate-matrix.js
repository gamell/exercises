/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // transpose
  let N = matrix.length;
  for(let i = 0; i < N; i++){
    for(let j = i; j < N; j++){
      let t = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = t;
    }
  }
  // horizontal mirror
  for(let i = 0; i < N; i++){
    for(let j = 0; j < Math.trunc(N/2); j++){
      let t = matrix[i][j];
      matrix[i][j] = matrix[i][N-1-j];
      matrix[i][N-1-j] = t;
    }
  }
};

var m = [[1,2,3],[4,5,6],[7,8,9]];
rotate(m);

console.log(m.join('\n'));
