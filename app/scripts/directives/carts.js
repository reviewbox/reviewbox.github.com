'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:carts
 * @description
 * # carts
 */

angular.module('reviewboxApp')
  .directive('carts', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the carts directive');
    }
  };
});