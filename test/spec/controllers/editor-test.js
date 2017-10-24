'use strict';

describe('Controller: EditorTestCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewboxApp'));

  var EditorTestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditorTestCtrl = $controller('EditorTestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
