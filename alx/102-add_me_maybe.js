function addMeMaybe (number, theFunction) {
    theFunction(number + 1);
}

addMeMaybe(4, function (nb) {
    console.log('New value: ' + nb);
  });