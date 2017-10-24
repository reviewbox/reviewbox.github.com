'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:ReadarticleCtrl
 * @description
 * # ReadarticleCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('ReadarticleCtrl', function ($scope) {
    $scope.proLineUp = false;
    var promise = new Promise(function (resolve){
      setTimeout(function(){
        resolve(42);
      }, 300);
      //console.log('promise started');
    });
    promise.then(function(x){
        $scope.proLineUp = true;
        //console.log($scope.proLineUp);
        $scope.$digest();
      }
    )

    $scope.toppings = [
      { category: 'meat', name: 'Pepperoni' },
      { category: 'meat', name: 'Sausage' },
      { category: 'meat', name: 'Ground Beef' },
      { category: 'meat', name: 'Bacon' },
      { category: 'veg', name: 'Mushrooms' },
      { category: 'veg', name: 'Onion' },
      { category: 'veg', name: 'Green Pepper' },
      { category: 'veg', name: 'Green Olives' }
    ];

    $scope.proLines = [
      {name:'Pro Line® Series Espresso Maker with Dual Independent Boilers', desc:'', imagePath:'dImages/pro/pro1.png'},
      {name:'Pro Line® Series 16-Cup Food Processor with Commercial-Style Dicing', desc:'', imagePath:'dImages/pro/pro2.png'},
      {name:'KitchenAid® Pro Line® Series 7-Qt Bowl Lift Stand Mixer', desc:'', imagePath:'dImages/pro/pro3.png'},
      //{name:'Pro Line® Series 4-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro4.png'},
      //{name:'Pro Line® Series 2-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro5.png'},
      //{name:'Pro Line® Series 5-Speed Cordless Hand Blender', desc:'', imagePath:'dImages/pro/pro6.png'},
      //{name:'Pro Line® Series Electric Kettle', desc:'', imagePath:'dImages/pro/pro7.png'},
      //{name:'KitchenAid® Pro Line® Series 7-Qt Bowl Lift Stand Mixer', desc:'', imagePath:'dImages/pro/pro8.png'},
      //{name:'Pro Line® Series 4-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro9.png'},
      //{name:'Pro Line® Series 5-Speed Cordless Hand Blender', desc:'', imagePath:'dImages/pro/pro10.png'},
      //{name:'Pro Line® Series Electric Kettle', desc:'', imagePath:'dImages/pro/pro11.png'},
    ];

    $scope.proLines2 = [
      //{name:'Pro Line® Series Espresso Maker with Dual Independent Boilers', desc:'', imagePath:'dImages/pro/pro1.png'},
      //{name:'Pro Line® Series 16-Cup Food Processor with Commercial-Style Dicing', desc:'', imagePath:'dImages/pro/pro2.png'},
      //{name:'KitchenAid® Pro Line® Series 7-Qt Bowl Lift Stand Mixer', desc:'', imagePath:'dImages/pro/pro3.png'},
      {name:'Pro Line® Series 4-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro4.png'},
      {name:'Pro Line® Series 2-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro5.png'},
      {name:'Pro Line® Series 5-Speed Cordless Hand Blender', desc:'', imagePath:'dImages/pro/pro6.png'},
      //{name:'Pro Line® Series Electric Kettle', desc:'', imagePath:'dImages/pro/pro7.png'},
      //{name:'KitchenAid® Pro Line® Series 7-Qt Bowl Lift Stand Mixer', desc:'', imagePath:'dImages/pro/pro8.png'},
      //{name:'Pro Line® Series 4-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro9.png'},
      //{name:'Pro Line® Series 5-Speed Cordless Hand Blender', desc:'', imagePath:'dImages/pro/pro10.png'},
      //{name:'Pro Line® Series Electric Kettle', desc:'', imagePath:'dImages/pro/pro11.png'},
    ];

    $scope.proLines3 = [
      {name:'Pro Line® Series Electric Kettle', desc:'', imagePath:'dImages/pro/pro7.png'},
      {name:'KitchenAid® Pro Line® Series 7-Qt Bowl Lift Stand Mixer', desc:'', imagePath:'dImages/pro/pro8.png'},
      {name:'Pro Line® Series 4-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro9.png'},
    ];

    $scope.proLine4=[
      {name:'Pro Line® Series 5-Speed Cordless Hand Blender', desc:'', imagePath:'dImages/pro/pro10.png'},
      {name:'Pro Line® Series Electric Kettle', desc:'', imagePath:'dImages/pro/pro11.png'},
    ];



    $scope.lines = [$scope.proLines, $scope.proLines2, $scope.proLines3, $scope.proLine4];
  });
