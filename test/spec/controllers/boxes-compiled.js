'use strict';

describe('Controller: BoxesCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var BoxesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoxesCtrl = $controller('BoxesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=boxes-compiled.js.map