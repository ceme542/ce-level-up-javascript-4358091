/* All lowercase, remove all punctuation, spaces -> "-"
  use regular expressions and string prototype functions
*/
// Write your code here

let input = "I've got a new job :) !!";

function urlify(inputString) {
  tmpString = inputString.replace(/[^a-zA-z0-9 ]/g, "")
  console.log(inputString, tmpString);
  tmpString = tmpString.toLowerCase().trim();
  tmpString = tmpString.replaceAll(" ", "-");
  console.log(tmpString);
}

urlify(input);