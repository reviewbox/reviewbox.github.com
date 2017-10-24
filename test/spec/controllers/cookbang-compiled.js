'use strict';

describe('Controller: CookbangCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var CookbangCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookbangCtrl = $controller('CookbangCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=cookbang-compiled.js.map