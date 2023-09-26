// Write your code here
/* 7 scrabble tiles, how many combinations
  factorial(n) = n * n-1 * n-2 ...

  End code uses a string and slice to reduce the number of letters.
*/

function letterCombos(num) {
  // console.log("num", num)
  if (num == 1) {
    return 1;
  }
  return  num * letterCombos(num - 1);
}

console.log("final", letterCombos(7));
