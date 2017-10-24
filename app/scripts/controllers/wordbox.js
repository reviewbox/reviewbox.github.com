'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:WordboxCtrl
 * @description
 * # WordboxCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('WordboxCtrl', function ($rootScope, $scope) {
    //read word
    $scope.target=0;
    $scope.notSelected = true;

    $scope.test = [
      {text:"Abdicate", mean:"~로부터 공식적으로 물러나다. 포기하다 양위하다"},
      {text:"Abduct", mean:"강제로 끌고 가다. 유괴하다"},
      {text:"Aberration", mean:"정도에서 벗어남 탈선. 이상"}
    ];

    $scope.getAnswer = function(){
    }

    $scope.nextWord = function(){
      if($scope.target != $scope.test.length -1)
        $scope.target++;
      else
        $scope.target = 0;
    }
  });
