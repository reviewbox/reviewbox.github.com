'use strict';

describe('Service: getStoreAccess', function () {

  // load the service's module
  beforeEach(module('reviewboxApp'));

  // instantiate service
  var getStoreAccess;
  beforeEach(inject(function (_getStoreAccess_) {
    getStoreAccess = _getStoreAccess_;
  }));

  it('should do something', function () {
    expect(!!getStoreAccess).toBe(true);
  });

});
