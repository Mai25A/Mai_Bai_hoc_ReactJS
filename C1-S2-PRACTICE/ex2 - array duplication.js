// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", age: 20 , lastName: "Nguyễn", batch:"A"},
  { firstName: "Bình", age: 22, lastName: "Trần", batch:"B" },
  { firstName: "Cẩm", age: 21, lastName: "Lê", batch:"C" },
  { firstName: "An", age: 19, lastName: "Lê", batch:"D" }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(firstName, newAge, lastName, batch) {
  let student = STUDENTS_DATA.find((s) =>s.firstName === firstName&&s.lastName == lastName&&s.batch == batch);

  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An age to 30
updateStudentAge("An", 30,"Lê","D");

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
