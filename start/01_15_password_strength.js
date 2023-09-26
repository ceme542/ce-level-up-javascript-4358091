/* Is password strong enough?
    Must use regex
    Must use a ternary operator
    Return either "your password is valid" or "your password is invalid"
    */

// Write your code here - I could easily clean this up, but on to the next one.
function validatePassword(password) {
  console.log(password)
  let regex = /[a-z]/
  let valid = regex.test(password)
  console.log(" 1 ", valid);
  // console.log("1 ", password.search(regex));
  // console.log("1 ", password[password.search(regex)]);
  regex = /[A-Z]/
  valid = valid && regex.test(password);
  console.log(" 2 ", valid);
  regex = /[0-9]/
  valid = valid && regex.test(password);
  console.log(" 3 ", valid);
  
  valid = valid && password.length > 7
  console.log(" 4 ", valid); 
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  valid = valid &&  specialChars.test(password);
  console.log(" 5 ", valid);
  const ok = "✅ Your password is valid"
  const notok = "⛔️ Your password is invalid"

  return valid ? ok : notok;
}

console.log(" ", validatePassword("1294289A"));
console.log(" ", validatePassword("01294a28943"));
console.log(" ", validatePassword("abcd"));
console.log(" ", validatePassword("abc1;d"));
console.log(" ", validatePassword("Abc1;d---"));