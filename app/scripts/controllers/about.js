'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.content = {
      title:"웹이 만들어 지는 과정을 알아 보자",
      views:"1",
      likes:"2",
      textBody:"이러 이러 이러하"
    }
  });
