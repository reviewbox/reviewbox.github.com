'use strict';

describe('Controller: GskbCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var GskbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GskbCtrl = $controller('GskbCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(scope.awesomeThings.length).toBe(3);
  //});
});
