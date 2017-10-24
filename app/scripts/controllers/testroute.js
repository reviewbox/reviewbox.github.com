'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:TestrouteCtrl
 * @description
 * # TestrouteCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('TestrouteCtrl', function ($scope, testFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.visible = true;

    $scope.facVar = testFactory.get();
    $scope.changeVar = function(){
      testFactory.set();
      $scope.facVar = testFactory.get();
    }
  });



angular.module('reviewboxApp')
  .controller('TestrouteCtrl', function ($scope, testFactory) {});