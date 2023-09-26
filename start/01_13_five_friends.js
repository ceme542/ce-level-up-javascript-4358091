const url = "https://randomuser.me/api/?results=5"
async function getUserData() {
  const response = await fetch(url);
  const data = await response.json();
}
const data = getUserData();
console.log(data);
// console.log(users[0].name);
// console.log(users[0].picture);
    
    