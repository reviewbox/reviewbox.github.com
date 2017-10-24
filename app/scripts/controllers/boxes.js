'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:BoxesCtrl
 * @description
 * # BoxesCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('BoxesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
