'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .config(['$httpProvider', '$mdThemingProvider', function($httpProvider, $mdThemingProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  }])
  .controller('MainCtrl', function (
    $scope, Auth, FBURL,
    $http, $window, $mdMedia, $mdDialog, firebaseAuth, $firebaseArray) {

    TweenLite.to('md-toolbar', 1, {backgroundColor:'rgb(92, 189, 104)'})

    // Get Authentication Firebase object
    var auth = Auth;
    // popup Login window for OAuth
    $scope.popupLogin = function(){
      auth.$authWithOAuthPopup("google").then(function(authData) {
        //console.log("Logged in as:", authData.uid);
        var ref = new Firebase(FBURL+'/users');
        $scope.users = $firebaseArray(ref);
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    }


    // LogOut
    $scope.logOut = function() {
      Auth.$unauth();
      firebaseAuth.removeLogin();
    };

    $scope.classes=[
      {name: 'AngularJS', img: 'dImages/angular.png', numbers:0},
      {name: 'Grunt', img: 'dImages/grunt.png', numbers:0},
      {name: 'NodeJS', img: 'dImages/js.png', numbers:0},
      {name: 'D3', img: 'dImages/d3.png', numbers:0},

    ];

    $scope.extraClass= {name: 'Firebase', img: 'dImages/Firebase.png', numbers:0};


    $scope.games=[
      {name: '브루마블', img: 'dImages/angular.png', level:'고급'},
      {name: '가위바위보', img: 'dImages/grunt.png', level:'초급'},
      {name: '테트리스', img: 'dImages/js.png', level:'고급'},
      {name: '사다라리게임', img: 'dImages/d3.png', level:'중급'}
    ];

    //$http(
    //{
    //  method: 'GET',
    //  url: 'https://topclipper.herokuapp.com/etc-products',
    //  //url: 'http://localhost:5000/etc-products',
    //}).success(function(data){
    //  $scope.products = data;
    //}).error(function(err){
    //    console.log(err)
    //  })
  });
