#!/usr/bin/node

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    } else {
        return "Not Found!";
    }
}

console.log(checkObj(dogs, 'Snoopie'))
console.log(checkObj(dogs, 'hund'))