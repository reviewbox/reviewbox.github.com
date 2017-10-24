'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:textEditor
 * @description
 * # textEditor
 */
angular.module('reviewboxApp')
  .directive('textEditor', function () {
    return {
      template: '<div class="textAngularEditor" text-angular="text-angular" name="htmlcontent" ng-model="htmlcontent" ta-disabled="disabled"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


      }
    };
  });