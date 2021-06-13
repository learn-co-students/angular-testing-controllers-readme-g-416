function MainController() {
    this.name = 'Bill Gates';
}

angular
    .module('app')
    .controller('MainController', MainController);

function addNumbers(numberOne, numberTwo) {
    return 4;
}