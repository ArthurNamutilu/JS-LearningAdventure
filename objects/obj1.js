#!/usr/bin/node

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

console.log(person.name[1]);
person.name[0];
person.age;
person.bio();
person.introduceSelf();