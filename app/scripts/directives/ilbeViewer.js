'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:viewer
 * @description
 * # viewer
 */
angular.module('reviewboxApp')
  .directive('ilbeViewer', function (FBURL, $firebaseObject) {
    return {
      templateUrl: 'views/template/ilbeViewer.html',
      restrict: 'E',
      scope:{
        'cnt': '=content'
      },
      link: function postLink(scope, element, attrs) {

        scope.cnt.$loaded().then(function(data){
          console.log(data.user_id);

          var url = FBURL + '/users/'+data.user_id;
          var authorRef = new Firebase(url);
          console.log("ilbeView");
          scope.author = $firebaseObject(authorRef);
          scope.author.$loaded().then(function(data) {
            if(data.provider === "facebook"){
              console.log('facebook');
              console.log(scope.author);
            }
          })
            .catch(function(error) {
              console.error("Error:", error);
            });


        });


      }
    };
  });