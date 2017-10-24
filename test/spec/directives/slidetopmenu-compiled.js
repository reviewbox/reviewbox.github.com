'use strict';

describe('Directive: slideTopMenu', function () {

  // load the directive's module
  beforeEach(module('reviewboxApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slide-top-menu></slide-top-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slideTopMenu directive');
  }));
});

//# sourceMappingURL=slidetopmenu-compiled.js.map