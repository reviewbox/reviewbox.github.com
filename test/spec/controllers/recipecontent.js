'use strict';

describe('Controller: RecipecontentCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var RecipecontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipecontentCtrl = $controller('RecipecontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
