/* User Object
username
password
age

Using javascript symbols, ensure that username and
password are private fields on the user character.

we can use symbols as identifiers for object properties.
*/

// Write your code here
const username = Symbol("username");
const password = Symbol("password");
const obj = {
  [username]: 'ceme',
  [password]: 'hello!there',
  age: 'noyb'
};

console.log("username symbol", username);
// obj[username] = 'ceme';
// obj[password] = 'hello!there'
// obj.age = 'noyb'

console.log("obj", obj);
console.log("stringify", JSON.stringify(obj));
console.log("1", obj[Symbol("username")]);
console.log("2", obj[Symbol("password")]);
console.log("3", obj[username]);
console.log("4", obj[password]);
console.log("3b", obj.username);
console.log("4b", obj.password);


const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols.length)
symbols.forEach(sym => console.log("5", obj[sym]));
// console.log("5", obj[symbol]); // 