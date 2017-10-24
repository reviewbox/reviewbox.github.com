'use strict';

describe('Service: firebaseAuth', function () {

  // load the service's module
  beforeEach(module('reviewboxApp'));

  // instantiate service
  var firebaseAuth;
  beforeEach(inject(function (_firebaseAuth_) {
    firebaseAuth = _firebaseAuth_;
  }));

  it('should do something', function () {
    expect(!!firebaseAuth).toBe(true);
  });

});
