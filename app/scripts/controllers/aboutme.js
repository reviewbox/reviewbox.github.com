'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:AboutmeCtrl
 * @description
 * # AboutmeCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('AboutmeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
