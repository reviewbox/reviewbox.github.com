'use strict';

describe('Controller: PartToolCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var PartToolCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartToolCtrl = $controller('PartToolCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=part-tool-compiled.js.map