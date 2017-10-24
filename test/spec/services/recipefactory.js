'use strict';

describe('Service: RecipeFactory', function () {

  // load the service's module
  beforeEach(module('reviewboxApp'));

  // instantiate service
  var RecipeFactory;
  beforeEach(inject(function (_RecipeFactory_) {
    RecipeFactory = _RecipeFactory_;
  }));

  it('should do something', function () {
    expect(!!RecipeFactory).toBe(true);
  });

});
