'use strict';

describe('Controller: LeftsidectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var LeftsidectrlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeftsidectrlCtrl = $controller('LeftsidectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=leftside-compiled.js.map