'use strict';

describe('Service: gskbProvider', function () {

  // load the service's module
  beforeEach(module('reviewboxApp'));

  // instantiate service
  var gskbProvider;
  beforeEach(inject(function (_gskbProvider_) {
    gskbProvider = _gskbProvider_;
  }));

  it('should do something', function () {
    expect(!!gskbProvider).toBe(true);
  });
});

//# sourceMappingURL=gskbprovider-compiled.js.map