// Destructuring assignment can also be used to pass an object as a function's parameters.
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
//   INSTEAD OF
/*
function displayDetails(obj) {
    console.log(`Name: ${obj.name}`);
    console.log(`Age: ${obj.age}`);
    console.log(`City: ${obj.city}`);
  }
  */
function displayDetails(name, age, city) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`City: ${person.city}`);
}
displayDetails(person);