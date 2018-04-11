//Given a list of schedules, provide a list of times that are  available for a meeting Example input:

// [ [[4,5],[6,10],[12,14]], [[4,5],[5,9],[13,16]], [[11,14]] ] Example Output: [[0,4],[11,12],[16,23]]

const input = [
  [[4,5], [6,10], [12,14]],
  [[4,5], [5,9], [13,16]],
  [[11,14]]
];

function schedules(input) {
  const day = new Array(24).fill(0);
  const conflicts = input.reduce((acum, calendar) =>
    calendar.reduce((acum, [start, end]) => {
      let length = end - start;
      while (length > 0) {
        acum[end - length] += 1;
        length = length - 1;
      }
      return acum;
    }, acum)
  , day);

  //return conflicts.map((elem, i) => elem === 0 ? i : null).filter((elem) => elem !== null);
  return conflicts.reduce((prev, curr, i) => {
    if (curr === 0) {
      switch (prev[prev.length - 1].length) {
        case 0:
          prev.push([i]);
        case 1:
          prev[prev.length - 1].push(i);
        case 2:
          prev[prev.length - 1][1] = i + 1;
      }
    } else {
      prev.push([]);
    }
    return prev;
  }, [[]]).filter((elem) => elem.length > 0);
}

console.log(JSON.stringify(schedules(input)));
