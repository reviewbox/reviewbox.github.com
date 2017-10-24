'use strict';
//export PS1="\W \$"
/**
 * @ngdoc function
 * @name reviewboxApp.controller:LetterCtrl
 * @description
 * # LetterCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('LetterCtrl', function ($scope, $interval, $http) {

    $scope.readyWord = false;
    //TweenMax.set("svg", 2, {drawSVG:"0 5%", scale:1.5});

    // Initialization
    $scope.title = '영어단어 게임';
    $scope.crntSet = {problem:'', anser:''};
    $scope.targetWord = 'Indepedent';
    // Extract Word from google sheet
    $scope.words = [];
    $http.get('https://script.google.com/macros/s/AKfycbzHgrkedszIY2bUZa89vUyAXznQ1fO7N-eWhAbuD6VadUZ50EB3/exec')
      .success(function(data){
        $scope.words = data;
        createProblemSet();
      });



    // Progress Bar Setting
    $scope.mode = 'query';
    $scope.determinateValue = 0;
    $interval(function() {
      $scope.determinateValue += 1;
      if ($scope.determinateValue > 100) {
        $scope.determinateValue = 0;
        $scope.next();
      }
    }, 100, 0, true);

    // Check Answer
    $scope.checkAnswer = function(index, answerIndex, answer){
      if(index == answerIndex)
        $scope.status='[Correct]';
      else
        $scope.status='[Wrong] '+ answer.problem+' : '+answer.options[answer.answer];
      //TweenMax.to('.quiz', 1, {xPercent: '200%', onComplete: $scope.next()});
      $scope.next();
    };

    //Create Problem set
    function createProblemSet(){
      var words = $scope.words;
      words.products = _.drop(words.products);
      var problemSets = [];

      console.log(words.products.length);
      _.forEach(words.products, function(n, key){
        if(key>0){
          var clonedArray = _.clone(words.products)
          var suffledWords = _.shuffle(clonedArray);
          var answerIndex = _.random(0, 3);

          var problemSet = {
            problem:n[0],
            answerIndex: answerIndex,
            options:[]
          }

          var exceptAnswer = _.pull(suffledWords, n);
          var options = _.slice(exceptAnswer, 0, 3);

          for(var i=0; i<=3; i++){
            if(i == answerIndex)
              problemSet.options.push(n[1]);
            else
              problemSet.options.push(options.pop()[1])
          };
          problemSets.push(problemSet);
        }
      })
      $scope.problemSet = _.shuffle(problemSets);

      // First Problem set to UI
      setProblem();
      $scope.readyWord = true;
    };

    function setProblem(){
      $scope.determinateValue = 0;
      var set = $scope.problemSet.pop();
      $scope.crntSet = {problem: set.problem, answer:set.answerIndex, options: set.options};
    }

    // Update Next Problem
    $scope.next = function(){
      if($scope.problemSet.length > 0)
        setProblem();
        TweenMax.from('.quiz', 0.5, {xPercent: '-100%'});
    }
  });
