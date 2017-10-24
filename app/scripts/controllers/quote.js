'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:QuoteCtrl
 * @description
 * # QuoteCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('QuoteCtrl', function ($scope, FBURL, $firebaseArray) {
    $scope.targetIndex = 0;
    var ref = new Firebase(FBURL);
    var catRef = ref.child('categories');
    $scope.categories = $firebaseArray(catRef)
    $scope.items = [
      {name:"INTEL 하스웰 1", price:"12만", pic:""},
      {name:"INTEL 하스웰 2", price:"15만", pic:""},
      {name:"INTEL 하스웰 3", price:"16만", pic:""},
      {name:"AMD FX 7800", price:"17만", pic:""},
      {name:"INTEL 하스웰 1", price:"12만", pic:""},
      {name:"INTEL 하스웰 2", price:"15만", pic:""},
      {name:"INTEL 하스웰 3", price:"16만", pic:""},
      {name:"AMD FX 7800", price:"17만", pic:""},
      {name:"INTEL 하스웰 1", price:"12만", pic:""},
      {name:"INTEL 하스웰 2", price:"15만", pic:""},
      {name:"INTEL 하스웰 3", price:"16만", pic:""},
      {name:"AMD FX 7800", price:"17만", pic:""},
      {name:"INTEL 하스웰 1", price:"12만", pic:""},
      {name:"INTEL 하스웰 2", price:"15만", pic:""},
      {name:"INTEL 하스웰 3", price:"16만", pic:""},
      {name:"AMD FX 7800", price:"17만", pic:""},
      {name:"INTEL 하스웰 1", price:"12만", pic:""},
      {name:"INTEL 하스웰 2", price:"15만", pic:""},
      {name:"INTEL 하스웰 3", price:"16만", pic:""},
      {name:"AMD FX 7800", price:"17만", pic:""},
      {name:"INTEL 하스웰 1", price:"12만", pic:""},
      {name:"INTEL 하스웰 2", price:"15만", pic:""},
      {name:"INTEL 하스웰 3", price:"16만", pic:""},
      {name:"AMD FX 7800", price:"17만", pic:""},
      {name:"AMD FX 8800", price:"9만", pic:""}
    ]
    $scope.buildCat = [
      {name: 'CPU'},
      {name: 'BOARD'},
      {name: 'MEMORY'},
      {name: 'HDD'},
      {name: 'SDD'},
      {name: 'CASE'},
      {name: 'Accessaries'}
    ];
    $scope.updateTarget = function(index){
      $scope.targetIndex = index;
    }
    $scope.selectCat = function(catName){
      console.log('selectCat');
      TweenLite.to('.leftMenuMain', 0.6, {xPercent:'100%'})
      var targetCategories = ref.child(catName);
      $scope.items = $firebaseArray(targetCategories);
      $scope.items.$loaded().then(function(){
        TweenLite.to('.leftMenuMain', 0.6, {xPercent:'0%'})
      })
    }
  });
