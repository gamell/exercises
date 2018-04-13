(function() {
  let res = "";
  const SIZE = 10;
  for (let row = 0; row < SIZE; row++) {
    // top & bottom
    if (row === 0 || row === SIZE - 1) {
      res += new Array(SIZE).fill("#").join("") + "\r\n";
      continue;
    }
    for (let col = 0; col < SIZE; col++) {
      if (
        col === 0 ||
        col === SIZE - 1 ||
        col === row ||
        SIZE - col - 1 === row
      ) {
        res += "#";
        continue;
      }
      res += " ";
    }
    res += "\r\n";
  }
  console.log(res);
})();
