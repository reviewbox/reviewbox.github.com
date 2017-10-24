'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:TutorialCtrl
 * @description
 * # TutorialCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('TutorialCtrl', function ($scope, FBURL, $http, $firebaseObject) {
    var GoogleAPI = "https://script.google.com/macros/s/AKfycbzHgrkedszIY2bUZa89vUyAXznQ1fO7N-eWhAbuD6VadUZ50EB3/exec";

    var URL = "https://reviewbox.firebaseio.com";
    var ref = new Firebase(FBURL+'/users');
    var data = $firebaseObject(ref);
    data.$loaded().then(function(){
      console.log("loaded record:", data.$id, data.someOtherKeyInData);

      // To iterate the key/value pairs of the object, use angular.forEach()
      angular.forEach(data, function(value, key) {
        console.log(key, value);
      });
    });

    $scope.data = data;
    data.$bindTo($scope, "data");



    //$http.get(GoogleAPI).success(function(data){
    //  $scope.words = data;
    //  $scope.crntWord = words[0];
    //})
    //  .error(function(err){
    //    console.error(err);
    //  });



  });


