// How many different way can the child go up the stairs if he can take steps of 1, 2 or 3 steps?

function steps(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 6;
  return (
    steps(n-1) + 1 +
    steps(n-2) + 2 +
    steps(n-3) + 6
  );
}

console.log(steps(21));
