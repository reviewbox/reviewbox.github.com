'use strict';

describe('Controller: CookCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var CookCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookCtrl = $controller('CookCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=cook-compiled.js.map