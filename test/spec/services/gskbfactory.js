'use strict';

describe('Service: GskbFactory', function () {

  // load the service's module
  beforeEach(module('reviewboxApp'));

  // instantiate service
  var GskbFactory;
  beforeEach(inject(function (_GskbFactory_) {
    GskbFactory = _GskbFactory_;
  }));

  it('should do something', function () {
    expect(!!GskbFactory).toBe(true);
  });

});
