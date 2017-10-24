'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
