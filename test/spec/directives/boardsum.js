'use strict';

describe('Directive: boardSum', function () {

  // load the directive's module
  beforeEach(module('reviewboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<board-sum></board-sum>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the boardSum directive');
  }));
});
