function MainController() {
    this.name = 'Steve Jobs';
}

angular
    .module('app')
    .controller('MainController', MainController);

function addNumbers(numberOne, numberTwo) {
    return 4;
}