'use strict';

/**
 * @ngdoc service
 * @name reviewboxApp.quizService
 * @description
 * # quizService
 * Factory in the reviewboxApp.
 */
angular.module('reviewboxApp')
  .factory('quizService', function () {
    return {
      setQuiz: function (quizId) {
        return meaningOfLife;
      },
      updateScore: function(quizId, score){

      },
    };
  });
