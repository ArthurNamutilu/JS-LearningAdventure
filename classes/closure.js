function init () {
    var name = "Mozilla";
    function displayName () {
        // displayName() is the inner function, that forms the closure
        console.log(name);
    }
    displayName();
}
init();