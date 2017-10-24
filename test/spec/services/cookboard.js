'use strict';

describe('Service: cookBoard', function () {

  // load the service's module
  beforeEach(module('reviewboxApp'));

  // instantiate service
  var cookBoard;
  beforeEach(inject(function (_cookBoard_) {
    cookBoard = _cookBoard_;
  }));

  it('should do something', function () {
    expect(!!cookBoard).toBe(true);
  });

});
