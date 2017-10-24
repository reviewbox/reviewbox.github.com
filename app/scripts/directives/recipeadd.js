'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:RecipeAdd
 * @description
 * # RecipeAdd
 */
angular.module('reviewboxApp')
  .directive('recipeAdd', function () {
    return {
      controller: RecipeAddCtrl,
      scope:{
        'target': '@onTarget'
      },
      controllerAs: 'RecCtrl',
      templateUrl:'fview/template/recipeAdd.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });

function RecipeAddCtrl($scope, RecipeFactory){

  var recipes = RecipeFactory.arrayObj();
  var vm = this;
  console.log(vm);
  vm.addRecipes = function(){
    console.log('addRecipes invoked');
    recipes.$add({
      text: vm.newRecipe,
      visitNum: 0,
      title: vm.title
    });
  };
}