function MainController() {
    this.name = 'Steve Jobs';
}

function addNumbers(a, b) {
    return parseFloat(a, 10) + parseFloat(b, 10);
}
angular
    .module('app')
    .controller('MainController', MainController);