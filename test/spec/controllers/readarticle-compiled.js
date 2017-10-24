'use strict';

describe('Controller: ReadarticleCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var ReadarticleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadarticleCtrl = $controller('ReadarticleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

//# sourceMappingURL=readarticle-compiled.js.map