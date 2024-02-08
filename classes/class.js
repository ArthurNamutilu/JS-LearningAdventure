class Person {
    name;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    introduceSelf() {
        console.log(`Hi I'm ${this.name} and I am ${this.age} years old`);
    }
}

// INHERITANCE
class Professor extends Person {
    teaches;

    constructor(name, age, teaches) {
        super(name, age);
        this.teaches = teaches;
    }

    // introduceSelf() has been overridden
    introduceSelf () {
        console.log(`My name is professor ${this.name} I am ${this.age} years old and I'll be your ${this.teaches} professor `);
    }

    grade(paper) {
        const score = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(`Your grade point is: ${score}`);
    }
}

// ENCAPSULATION

class Student extends Person {
    #year      // PRIVATE DATA PROPERTY
    constructor(name, age, year) {
        super(name, age);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I'm in year ${this.#year} `);
    }

    canStudyArchery() {
        if (this.#year > 1) {
            console.log(`You are in year ${this.#year} you therefore qualify to study Archery`);
        } else {
            console.log('Only those beyond year 1 are allowed to study Archery');
        }
    }
}



const person1 = new Person('Alice', 23);
person1.introduceSelf();

const mwalimu = new Professor('Siele', 47, 'HCI');
mwalimu.introduceSelf();
mwalimu.grade();

const mwanafunzi = new Student('Jiji', 24, 1);
mwanafunzi.introduceSelf();
mwanafunzi.canStudyArchery();


// PRIVATE METHODS

class Example {
    somePublicMethod() {
      this.#somePrivateMethod();
    }
  
    #somePrivateMethod() {
      console.log("You called me?");
    }
  }
  
  const myExample = new Example();
  
  myExample.somePublicMethod(); // 'You called me?'
  
//  myExample.#somePrivateMethod(); // SyntaxError
  