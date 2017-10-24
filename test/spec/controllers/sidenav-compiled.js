'use strict';

describe('Controller: SidenavCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var SidenavCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidenavCtrl = $controller('SidenavCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=sidenav-compiled.js.map