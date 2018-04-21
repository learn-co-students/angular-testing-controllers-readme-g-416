describe('addNumbers()', function() {
  it('should add two numbers', function() {
      expect(addNumbers(1, 2)).toBe(3);
      expect(addNumbers(111, 2)).toBe(113);
      expect(addNumbers(17, 24)).toBe(41);
      expect(addNumbers("1", 22)).toBe(23);
      expect(addNumbers("23", "22")).toBe(45);
  });
});

describe('MainController', function() {
  beforeEach(module('app'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should have Steve Jobs name', function() {
    var $scope = {};

    var controller = $controller('MainController', { $scope: $scope });
    expect(controller.name).toEqual('Steve Jobs');
  });
});
