const matrix = [
  [ 1,  2,  3,  4,  5,  6],
  [ 7,  8,  9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
];

//assuming square matrix
function spiralOrder(m, res = []) {
  if(m.length === 0) return res;
  if(m.length === 1) { // base case
    return res.concat(m[0]);
  }
  let top = [];
  let bottom = [];
  let left = [];
  let right = [];
  let next = [];
  for (let row = 0; row < m.length; row++) {
    if (row === 0) {
      top = m[row];
      continue;
    } else if (row === m.length - 1) {
      bottom = m[row].reverse();
      continue;
    }
    next.push([]);
    for (let col = 0; col < m[row].length; col++) {
      if (col === m[row].length - 1) {
        right = [...right, m[row][col]];
        continue;
      } else if (col === 0 ){
        left = [m[row][col], ...left];
        continue;
      }
      next[row-1] = next[row-1] || [];
      next[row-1].push(m[row][col]);
    }
  }

  res = res.concat(top, right, bottom, left);

  console.log(`Res: ${res}`);
  console.log(`Next: ${JSON.stringify(next)}`);

  return spiralOrder(next, res);
}

console.log(spiralOrder(matrix));
