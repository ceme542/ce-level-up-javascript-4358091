/* The total bill is ${total} <- use string literal
  array reduce
*/
// Write your code here
let numCoffeesList = [2, 3, 1, 5];
const initialValue = 0;

let total = numCoffeesList.reduce((accumulator, numCoffees) => accumulator + numCoffees * 1.25, initialValue)

console.log(`The total bill is $${total}`);

// another run, more expensive coffee

numCoffeesList = [2, 3, 1, 5];
total = numCoffeesList.reduce((runningTotal, currentValue) => runningTotal + currentValue * 2.50, 0);
console.log(`The total bill for coffee @2.50 is $${total}`)

// She used it without initialValue and it seemed to work.
// Can use reduce instead of array.filter + array.map (going through array twice)?


function calcCoffee(coffees) {
  const total = coffees.reduce((subtotal, currentNum) => subtotal + currentNum );
  console.log(`The total bill is $${1.25 * total}`);
}

calcCoffee(numCoffeesList);