'use strict';

describe('Directive: grunt', function () {

  // load the directive's module
  beforeEach(module('reviewboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<grunt></grunt>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the grunt directive');
  }));
});
