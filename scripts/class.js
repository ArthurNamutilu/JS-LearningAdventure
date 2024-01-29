class Country{
    // Constructor method initializes the object
    constructor(name, capital){
        this.name = name;
        this.capital = capital
    }
    // Method to display information about te country
    displayInfo(){
        console.log(`The capital city of ${this.name} is ${this.capital}`)
    }
}

// create an object using the new keyword
const fav1 = new Country("England", "London");
const fav2 = new Country("Germany", "Berlin");
fav1.displayInfo();
fav2.displayInfo();

// inheritance -> allow creation of new class based on existing ones use 'extends' kewword
class City extends Country{
    constructor(name, capital, population){
        super(name, capital);
        this.population = population;
    }
    // method specific to City class
    displayPopulation(){
        console.log(`${this.name} has a population of ${this.population} people`);
    }
}
// constructor
const newYork = new City("New York", "Albany", 8419600);
newYork.displayInfo();
newYork.displayPopulation();