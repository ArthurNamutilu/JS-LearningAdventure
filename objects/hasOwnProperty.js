function checkForProperty(object, property) {
    return object.hasOwnProperty(property);  // hasOwnProperty()
}

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

console.log(checkForProperty(dogs, 'Huter'));