'use strict';

describe('Controller: WordboxCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var WordboxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WordboxCtrl = $controller('WordboxCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=wordbox-compiled.js.map