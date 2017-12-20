describe('MainController', function() {
    beforeEach(module('app'));

    let $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('should have Steve Jobs name', function() {
        let $scope = {};
        let controller = $controller('MainController', { $scope: $scope });
        expect(controller.name).toEqual('Steve Jobs');
    });
});