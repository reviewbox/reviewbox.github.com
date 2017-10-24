'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:testDirective
 * @description
 * # testDirective
 */
angular.module('reviewboxApp')
  .directive('testDirective', function ($compile) {
    return {
      template: '<div>{{ctrl.text}}<div ng-transclude style="background-color: #0b63b6"></div></div>',
      restrict: 'EA',
      controller: testDirective,
      transclude: true,
      controllerAs: 'ctrl',
      link: function postLink(scope, element, attrs) {
        console.log(element);
        var inputBtn = angular.element('<test-directive2></test-directive2>');
        element.append(inputBtn);
        $compile(inputBtn)(scope);
        element.css({'background-color' : '#c6c6c6'});
      }
    };
  })

.directive('testDirective2', function ($compile) {
  return {
    template: '<div>{{ctrl.text}}<div ng-transclude style="background-color: #0b63b6"></div></div>',
    restrict: 'EA',
    controller: testDirective,
    transclude: true,
    controllerAs: 'ctrl',
    link: function postLink(scope, element, attrs) {
      element.css({color: 'red'})
    }
  };
});


function testDirective(){
  // Business Logic
  var vm = this;
  vm.text = "test directive";
}