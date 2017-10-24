'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:RecipecontentCtrl
 * @description
 * # RecipecontentCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('RecipecontentCtrl', function ($scope, $routeParams, Ref, Auth, FBURL, $firebaseObject, $firebaseArray) {
    var recRef = new Firebase(FBURL+'/recipes/'+$routeParams.id);
    $scope.recipe = $firebaseObject(recRef);

    $scope.checkAutho = function(target){
      if($scope.authData.uid === target.user_id)
        return true
    }
    $scope.authObj = Auth;
    $scope.authData = Auth.$getAuth(); //Current User
    if($scope.authData){
      var profile = $firebaseObject(Ref.child('users/'+$scope.authData.uid));
      profile.$bindTo($scope, 'profile');
      console.log(profile);
    }
    var cmtRef = new Firebase(FBURL+'/comments/'+$routeParams.id);
    $scope.cmts = $firebaseArray(cmtRef);

    $scope.cmts.$loaded()
      .then(function(x) {
        $scope.cmtLength= x.length;
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
    $scope.isReplyFormOpen = true;

    $scope.removeComment = function(record){
      //console.log(record);
      $scope.cmts.$remove(record).then(function(ref){
        ref.key() === record.$id; // true
      })
    }
  });
