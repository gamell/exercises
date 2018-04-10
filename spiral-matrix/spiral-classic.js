const matrix = [
  [ 1,  2,  3,  4,  5,  6],
  [ 7,  8,  9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
];

//assuming square matrix
function spiral(m, row0 = 0, col0 = 0, row1 = null, col1 = null, res = '') {
  if (row1 === null) row1 = m.length - 1;
  if (col1 === null) col1 = m[0].length - 1;
  if (row1 - row0 < 0 || col1 - col0 < 0) return res;

  // top
  if (row0 !== 0) res+= ' ';
  res += m[row0].slice(col0, col1 + 1).join(' ');

  // right

  for (let row = row0 + 1; row < row1; row++) {
    res += ' ' + m[row][col1];
  }

  // bottom

  res += ' ' + m[row1].reverse().slice(col0, col1 + 1).join(' ');

  // left

  for (let row = row1 - 1; row > row0; row--) {
    res += ' ' + m[row][col0];
  }

  console.log(`Res: ${res}`);

  return spiral(m, row0 + 1, col0 + 1, row1 - 1, col1 - 1, res);
}

console.log(spiral(matrix));
