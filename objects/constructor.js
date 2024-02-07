// object

function Person (name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}`);
    };
}

// constructor using new KW

const gg = new Person("Arthur");
console.log(gg.name);
gg.introduceSelf();