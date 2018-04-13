/*

Question
Implement 3 aspect of an automated check authoring solution:
The conversion of a number into a text representation of the number for the check (bounded to 99,999,999.00)
The appropriate markup for a semantic and accessible check
The styles to style the check to look like the picture (basically a chance to discuss layout issues).
Equipment & Setup
Draw a simple check on the whiteboard like, or just put the picture up on the screen:

If the candidate is not familiar with what a check is, please explain it and then explain the different parts of a check briefly.
Inform the candidate that first they will be writing a function that is capable of taking in a dollar about between 0.00 and 9999.99 as a double like format and return a string value that can be put in the "Written amount of the check" field.
Example: 50.00 -> "Fifty and 0/100"
Example: 124.34 -> "One Hundred Twenty Four and 34/100"
Example: 2945.12 -> "Two Thousand Nine Hundred Forty Five and 12/100"
After step 3 is done: Ask them to write some markup for the check.
After step 4 is done: Ask them to write some styles for the check.

*/

const NUM_TO_TEXT = [
  '',
  { 0: 'one', 1: 'ten'},
  { 0: 'two', 1: 'twenty'},
  { 0: 'three', 1: 'thirty'},
  { 0: 'four', 1: 'forty'},
  { 0: 'five', 1: 'fifty'},
  { 0: 'six', 1: 'sixty'},
  { 0: 'seven', 1: 'seventy'},
  { 0: 'eight', 1: 'eighty'},
  { 0: 'nine', 1: 'ninety'},
  { 0: 'ten' },
  { 0: 'eleven' },
  { 0: 'twelve' },
  { 0: 'thirteen' },
  { 0: 'fourteen' },
  { 0: 'fifteen' },
  { 0: 'sixteen' },
  { 0: 'seventeen' },
  { 0: 'eighteen' },
  { 0: 'nineteen' }
]

function get3Digits(num, step, n) {
  if (step === 0) {
    Math.trunc((num * 100) % 100);
  }
  const length = 3;
  const nDigit = step * length;
  return Math.trunc((num % (10 ** nDigit)) / (10 ** (nDigit - length)));
}

function write(amount, step = 0, res = '') {
  if (amount <= 0 || step > 6) return res;
  const num = get3Digits(amount, step);
  let writtenNum = '';
  if (num > 0) {
    const [ hun, dec, unit ] = num.toString().split('');
    const lower2 = parseInt(dec + unit, 10);
    if (lower2 < 20) {
      writtenNum += NUM_TO_TEXT[lower2][0] + ' ';
    } else {
      if (unit > 0) writtenNum = `${NUM_TO_TEXT[unit][0]} ${writtenNum}`;
      if (dec > 0) writtenNum = `${NUM_TO_TEXT[dec][1]} ${writtenNum}`;
    }
    if (hun > 0) writtenNum = `${NUM_TO_TEXT[hun][0]} hundred ${writtenNum}`;
    switch (step) {
      case 0: // cents
        writtenNum = 'and ' + writtenNum + 'cents.';
      case 1:
        break;
      case 2: // thousands
        writtenNum = writtenNum + 'thousand ';
        break;
      case 3: // Mill
        writtenNum = writtenNum + 'million ';
        break;
    }
    res = writtenNum + res;
  }
  return write(amount, step + 1, res);
};

console.log(write(11919191900000));
// nine thousand nine houndred ninety nine
