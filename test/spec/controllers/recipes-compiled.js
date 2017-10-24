'use strict';

describe('Controller: RecipesCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var RecipesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipesCtrl = $controller('RecipesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=recipes-compiled.js.map