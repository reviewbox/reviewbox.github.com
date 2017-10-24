'use strict';

describe('Controller: PrdDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var PrdDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrdDetailCtrl = $controller('PrdDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=prd-detail-compiled.js.map