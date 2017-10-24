'use strict';

describe('Controller: SelectproductCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var SelectproductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectproductCtrl = $controller('SelectproductCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=selectproduct-compiled.js.map