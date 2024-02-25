function makeFunc () {
    const name = "Mozilla";
    function displayName () {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

function outerFunction() {
    let outerVariable = 'I am from outer function';
  
    function innerFunction() {
      console.log(outerVariable); // Accesses outerVariable from outer scope
    }
  
    return innerFunction; // Returns the inner function
  }
  
  const closure = outerFunction(); // Assigns the inner function (closure) to a variable
  closure(); // Calls the inner function, which still has access to outerVariable
  