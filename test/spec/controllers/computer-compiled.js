'use strict';

describe('Controller: ComputerCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var ComputerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComputerCtrl = $controller('ComputerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=computer-compiled.js.map