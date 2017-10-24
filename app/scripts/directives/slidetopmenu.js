'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:slideTopMenu
 * @description
 * # slideTopMenu
 */
angular.module('reviewboxApp')
  .directive('slideTopMenu', function () {
    return {
      templateUrl:'views/template/slideTopMenu.html',
      controller:slideTopMenuCtrl,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        MorphSVGPlugin.convertToPath("ellipse");
        scope.sizeChange = function(){

          var tl = new TimelineMax();
          tl.fromTo("#logo", 0.6, {yPercent:-100, scale:1},{yPercent:0})
            .to("#start1", 1, {opacity:0})
            .to("#end2", 1, {rotation:-10})
            .to("#start2", 1, {morphSVG:"#end1"})
            .to("#logo", 2, {scale:0.3, yPercent:'30%', xPercent:'30%'})
        }

        var svg = $('.svgHouse svg')[0];
        var tl2 = new TimelineMax({onComplete:houseView});
        tl2
          .to('.form1',2, {autoAlpha:0})
          .set('.form2', {display:'block'})
          .set('.form2Svg', {display:'block'})
          .to('.form2',2, {autoAlpha:1})
          .to('.form2',2, {autoAlpha:0})
          .set(['.form2', '.secondCol', '.form1'], {display:"none"})
          .to('.firstCol', 0.6, {width:'100%', height:'100%'})
        function houseView(){
          var tl3 = new TimelineMax({onComplete:computerQuote});
          tl3
            .to('.svgHouse svg', 2, {delay: 1, attr: {viewBox: "450 350 252 178"}})
            .to('.svgHouse svg', 4, {attr: {viewBox: "60 350 252 178"}})
            .to('.svgHouse svg', 2, {attr: {viewBox: "60 210 252 178"}}, "-=0.25")
            .to('.svgHouse svg', 4, {attr: {viewBox: "444 210 252 178"}})
            .to('.svgHouse svg', 2, {attr: {viewBox: "0 0 757.8 534.8"}})
            .to('#truck',2, {xPercent:200})
        }

        function computerQuote(){
          var tl4 = new TimelineMax();
          tl4
            .to('.form2Svg', {autoAlpha:1})
            .set('.form2Svg', {display:'none'})

            .to('.form3',2, {autoAlpha:0, display:'none'})
            .set('.form4', {display:'block'})

            .to('.form2',2, {autoAlpha:1})
            .to('.form2',2, {autoAlpha:0})
            .set(['.form2', '.secondCol', '.form1'], {display:"none"})
            .to('.firstCol', 0.6, {width:'100%', height:'100%'})
        }




      }
    };
  });

function slideTopMenuCtrl($scope, $window, $mdMedia){

  $scope.$watch(function(){
    return $window.innerWidth;
  }, function(value) {
    $scope.bigScreen = $mdMedia('gt-md')
    $scope.screenIsSmall = $mdMedia('sm');
    console.log('bigScreen: '+ $scope.bigScreen)
    console.log('screenIsSmall: '+ $scope.screenIsSmall)
    if($scope.screenIsSmall){
      TweenMax.to('.leftMenuMain', 1, {left:'-100%'})
      TweenMax.to('.rightMenuMain', 1, {right:'-100%'})
    }else
    {
      TweenMax.to('.leftMenuMain', 1, {left:'0%'})
      TweenMax.to('.rightMenuMain', 1, {right:'0%'})
    }
  });
}