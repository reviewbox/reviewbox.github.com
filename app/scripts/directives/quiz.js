'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:quiz
 * @description
 * # quiz
 */
angular.module('reviewboxApp')
  .directive('quiz', function () {
    return {
      templateUrl: 'views/quiz/quiz.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.quizs=
          {quiz:'Which season is the hottest?', options:['Spring', 'Summer','Fall', 'Winter']}
        ;
      }
    };
  });