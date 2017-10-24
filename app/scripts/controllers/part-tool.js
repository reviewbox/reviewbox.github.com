'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:PartToolCtrl
 * @description
 * # PartToolCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('PartToolCtrl', function ($scope, FBURL, $firebaseArray) {
    var ref = new Firebase(FBURL);

    $scope.newCategories = function(targetObj){
      var categoriesRef = ref.child('categories');
      $scope.categories = $firebaseArray(categoriesRef);
      $scope.categories.$add(targetObj);
      $scope.newCat = null;
    }

    $scope.deleteCat = function(index){
      var item = $scope.categories[index];
      $scope.categories.$remove(item).then(function(ref) {
        ref.key() === item.$id; // true
      });
    }

    $scope.loadCat = function() {
      // Use timeout to simulate a 650ms request.
      var categoriesRef = ref.child('categories');
      $scope.categories = $firebaseArray(categoriesRef);
      $scope.categories.$loaded().then(function(data){

      })
    };

    $scope.selectChanged = function(){
      var productRef = new Firebase(FBURL).child($scope.cat.name);
      $scope.targetItems = $firebaseArray(productRef)
    }

    $scope.addNewProduct = function(){
      var targetCategory = new Firebase(FBURL).child($scope.cat.name);
      var targetList = $firebaseArray(targetCategory);
      targetList.$add($scope.product).then(
        function(){
          $scope.product = null;
        }
      );

    }

  });
