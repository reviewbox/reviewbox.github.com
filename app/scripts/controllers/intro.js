'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:IntroCtrl
 * @description
 * # IntroCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .filter('keyboardShortcut', function($window) {
    return function(str) {
      if (!str) return;
      var keys = str.split('-');
      var isOSX = /Mac OS X/.test($window.navigator.userAgent);
      var seperator = (!isOSX || keys.length > 2) ? '+' : '';
      var abbreviations = {
        M: isOSX ? '⌘' : 'Ctrl',
        A: isOSX ? 'Option' : 'Alt',
        S: 'Shift'
      };
      return keys.map(function(key, index) {
        var last = index == keys.length - 1;
        return last ? key : abbreviations[key];
      }).join(seperator);
    };
  })
  .controller('IntroCtrl', function ($scope, $mdDialog) {

    var colors = ["red", "blue", "green", "purple", "pink", "yellow", "orange"];

    TweenMax.staggerTo(".box", 1, {
      cycle: {
        y: [75, 0, -75],
        backgroundColor: function(i) {
          //i = index of current tween
          //this = target of current tween <div class="box"></div>
          console.log(i, this);
          //return a random color from the array
          return colors[Math.floor(Math.random() * colors.length)];
        }
      },
      ease: Power2.easeInOut
    }, 0.05);



    var titleText = new SplitText(".wrapper h2", {type:"chars"}),
      numTitleChars = titleText.chars.length,
      tl = new TimelineMax({delay:0.5, repeat:3});

    TweenLite.set(".wrapper", {visibility:"visible"});
    tl.staggerFrom(titleText.chars, 0.8, {ease:Back.easeOut, x:100, cycle:{y:curve}, opacity:0}, 0.02)
      .staggerTo(titleText.chars, 0.8, {ease:Back.easeOut, cycle:{y:[100, -100], rotation:[-120, 120]}, opacity:0}, 0.03, "+=1")


//position starting y of each letter on a cos curve;
    function curve(i){
      var n = i / numTitleChars * 6.24;
      return  (Math.cos(n)) * -200;
    }

    /*
     See http://www.greensock.com/splittext/ for details.
     This demo uses SplitText which is a membership benefit of Club GreenSock, http://www.greensock.com/club/
     */
    $("#restart").click(function(){
      tl.restart();
    });



    this.settings = {
      printLayout: true,
      showRuler: true,
      showSpellingSuggestions: true,
      presentationMode: 'edit'
    };
    this.sampleAction = function(name, ev) {
      $mdDialog.show($mdDialog.alert()
          .title(name)
          .content('You triggered the "' + name + '" action')
          .ok('Great')
          .targetEvent(ev)
      );
    };


  });
