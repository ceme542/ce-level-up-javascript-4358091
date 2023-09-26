function* myGenerator(stops) {
  // const stops = ["Poughkeepsie", "Newburgh", "Peekskill", "Yonkers", "Bronx", "Grand Central"];
  for (let i = 0; i < stops.length; i++) {
  // for (let item for stops) {
    yield stops[i];
  }
}
const stops = ["New One", "Poughkeepsie", "Newburgh", "Peekskill", "Yonkers", "Bronx", "Grand Central"];
const gen = myGenerator(stops);
// console.log(gen.next());
let {value, done} = gen.next();
console.log(value, done);