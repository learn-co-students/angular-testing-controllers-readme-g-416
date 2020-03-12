function MainController() {
    this.name = 'Bill Gates';
}

function addNumbers(numberOne, numberTwo) {
  return parseFloat(numberOne, 10) + parseFloat(numberTwo, 10);
}

angular                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    .module('app')
    .controller('MainController', MainController);
