exports.nbOccurences = function (list, searchElement) {
    const occurances = list.filter(item => item === searchElement)
    return occurances.length;
}