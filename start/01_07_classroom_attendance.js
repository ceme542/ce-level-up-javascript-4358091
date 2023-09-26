// Write your code here
// const arr = [1, 2, 3]
// // const [val1] = arr
// const [val1, ...val3] = arr
// console.log(val1)
// // console.log(val2)
// console.log(val3)

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;

// 
// ole.log("d", d)


/* getStudents
  params
    classroom obj
      hasTeachingAssistant
      classList - array of people in the class
        classList[0] == teacher
        classList[1] == teaching assistant if true
  Must use object and array destructuring.
*/
const people = [
    "Carol", "Tammy", "Joe", "Rich", "Sue", "Maddy"
  ]
const classroom1 = {
  hasTeachingAssistant: true,
  classList: people
}
classroom2 = {
  hasTeachingAssistant: false,
  classList: people
}

const getStudents = function(classroom) {
  const {classList} = classroom;
  let teacher, assistant, students;
  if (classroom.hasTeachingAssistant) {
    [teacher, assistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students
}

console.log(getStudents(classroom1))
console.log(getStudents(classroom2))