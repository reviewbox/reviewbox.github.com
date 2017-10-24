'use strict';

/**
 * @ngdoc directive
 * @name reviewboxApp.directive:commentForm
 * @description
 * # commentForm
 */
angular.module('reviewboxApp')
  .directive('commentForm', function () {
    return {
      template: '<form name="projectForm" ng-submit="commentPush()">'+
                  '<md-input-container flex>'+
                    '<label>Comment</label>'+
                    '<textarea required name="newComment" ng-model="newComment" columns="1" md-maxlength="150"></textarea>'+
                    '<div ng-messages="projectForm.newComment.$error">'+
                      '<div ng-message="md-maxlength">커멘트는 150자 이상 적으실수 없습니다.</div>'+
                    '</div>'+
                  '</md-input-container>'+
                  '<md-button class="md-raised md-warn" type="submit">커멘트 쓰기</md-button>'+
                  '</form>',
      restrict: 'E',
      scope:{
        'target': '@onTarget',
        'recipe': '@onRecipe'
      },
      controller: commentFormCtrl,
      link: function postLink(scope, element, attrs) {
      }
    };
  });

function commentFormCtrl($scope, $firebaseArray, FBURL, FirebaseRefFactory, $firebaseObject, Auth){

  FirebaseRefFactory.setRef('comments');
  var authData = Auth.$getAuth();
  var commentRef= FirebaseRefFactory.getRef();
  var list = $firebaseArray(commentRef);
  list.$loaded(function(data){
    console.log(data)}
  );

  var url = FBURL + '/users/'+authData.uid;
  var userRif = new Firebase(url);
  console.log("ilbeView");
  var user = $firebaseObject(userRif);
  user.$loaded().then(function(data) {
    if(data.provider === "facebook"){

    }
  })
    .catch(function(error) {
      console.error("Error:", error);
    });


  //console.log($scope.target);

  $scope.commentPush = function(){
    var testRef = commentRef;
    var newRefs=[];

    var newRef = pushSomething(testRef, $scope.newComment);
    $scope.newComment = '';
    newRefs.push(newRef);
  }

  function pushSomething(ref, body) {
    // Let's push something. push() returns a reference that you can hold onto!
    console.log('uesr_id '+authData.uid, 'body '+body);
    console.log(authData);
    var justPushed = ref.child($scope.target).push(
      {
        user_id: authData.uid,
        name: user.name,
        profileImage: user.profileImage,
        body: body,
        timestamp: Firebase.ServerValue.TIMESTAMP
      }
    );
    // We return a reference, but you can also return the name of the newly
    // created object with .name().
    return justPushed;
  }
}