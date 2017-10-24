'use strict';

describe('Directive: carts', function () {

  // load the directive's module
  beforeEach(module('reviewboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<carts></carts>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the carts directive');
  }));
});
