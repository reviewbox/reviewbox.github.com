'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:boardSum
 * @description
 * # boardSum
 */
angular.module('reviewboxApp')
  .directive('boardSum', function () {
    return {
      templateUrl: 'views/template/boardSum.html',
      controller: boardSumCtrl,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var carrotSvg = $("#carrot");
        TweenMax.to(carrotSvg, 0.6,{scale:1.7});
      }
    };
  });

function boardSumCtrl($scope){

  $scope.clickRow = function(index){
    console.log(index+' has been selected');
  }
  $scope.list=[
    {name: '피자만들기피자만들기피자만들기', likes: 20, date: new Date() },
    {name: '피자만들기피자만들기피자만들기', likes: 20, date: new Date() },
    {name: '피자만들기피자만들기피자만들기', likes: 20, date: new Date() },
    {name: '피자만들기피자만들기피자만들기', likes: 20, date: new Date() },
    {name: '피자만들기피자만들기피자만들기', likes: 20, date: new Date() },
    {name: '피자만들기피자만들기피자만들기', likes: 20, date: new Date() },
    {name: '피자만들기피자만들기피자만들기', likes: 20, date: new Date() },
    {name: '피자만들기피자만들기피자만들기', likes: 20, date: new Date() },
    {name: '파스타만들기파스타만들기파스타만들기', likes: 20, date: new Date() }
  ]
}