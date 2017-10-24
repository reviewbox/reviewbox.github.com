'use strict';

describe('Filter: logoSvgUrl', function () {

  // load the filter's module
  beforeEach(module('reviewboxApp'));

  // initialize a new instance of the filter before each test
  var logoSvgUrl;
  beforeEach(inject(function ($filter) {
    logoSvgUrl = $filter('logoSvgUrl');
  }));

  it('should return the input prefixed with "logoSvgUrl filter:"', function () {
    var text = 'angularjs';
    expect(logoSvgUrl(text)).toBe('logoSvgUrl filter: ' + text);
  });
});

//# sourceMappingURL=logosvgurl-compiled.js.map