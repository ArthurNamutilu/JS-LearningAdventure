// Mutate an Array Declared with const
// Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0]= 2;
  s[1] = 5
  s[2] = 7
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();