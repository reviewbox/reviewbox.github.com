'use strict';

describe('Controller: PlacesCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var PlacesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlacesCtrl = $controller('PlacesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=places-compiled.js.map