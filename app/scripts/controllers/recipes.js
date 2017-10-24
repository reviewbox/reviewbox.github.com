'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('RecipesCtrl', function ($scope, $location, $mdDialog, Ref,
                                       $firebaseObject, Auth, $firebaseArray, FBURL, FirebaseRefFactory) {

    TweenLite.to('md-toolbar', 1, {backgroundColor:'rgb(63,81,181)'})
    $scope.checkAutho = function(target){
      if($scope.authData.uid === target.user_id)
      return true
    }
    $scope.goTO = function(id){
      console.log(id);
      $location.path( '/cook/recipes/'+id );
    }
    $scope.authObj = Auth;
    $scope.authData = Auth.$getAuth();
    if($scope.authData){
      var profile = $firebaseObject(Ref.child('users/'+$scope.authData.uid));
      profile.$bindTo($scope, 'profile');
      console.log(profile);
    }

    //Firebase
    var cmtRef = new Firebase(FBURL+'/comments');
    $scope.cmts = $firebaseArray(cmtRef);

    FirebaseRefFactory.setRef('recipes');
    var ref= FirebaseRefFactory.getRef();
    var query = ref.orderByChild("timestamp").limitToLast(5);
    query.on("child_added", function(messageSnapshot) {
        console.log("Number of Recipes: " + messageSnapshot.length);
      });
    $scope.recipes = $firebaseArray(query);
    $scope.recipes.$loaded().then(function(x) {
      console.log(x.length);
    })
    .catch(function(error) {
      console.log("Error:", error);
    });

    // Add Recipes
    //$scope.addRecipes = function(){
    //  $scope.recipes.$add({
    //    uesrid: $scope.authData.uid,
    //    text: $scope.newRecipe,
    //    visitNum: 0,
    //    timestamp: Firebase.ServerValue.TIMESTAMP,
    //    title: $scope.title
    //  });
    //};

    function pushSomething(ref, body) {
      // Let's push something. push() returns a reference that you can hold onto!
      var justPushed = ref.push({user_id: $scope.authData.uid, body: body});
      // We return a reference, but you can also return the name of the newly
      // created object with .name().
      return justPushed;
    }

    $scope.commentPush = function(){
      var testRef = commentRef;
      var newRefs=[];

      var newRef = pushSomething(testRef, $scope.newComment);
      $scope.newComment = '';
      newRefs.push(newRef);

    }

    function removeItem(refs) {
      // Now we can get back to that item we just pushed via .child().
      refs.forEach(function(val){
        val.remove(function(error) {
          console.log(error ? "Uh oh!" : "Success!");
        });
      })
    }

    $scope.go = function() {
      var testRef = ref;
      var newRefs=[];
      for(var i =0; i<3; i++){
        var newRef = pushSomething(testRef, i);
        newRefs.push(newRef);
      }
      // Later... should popup an alert that says "null" (No Error).
      //removeItem(newRefs);
    }

    var width = 300;
    TweenMax.to('.textAngularContent img', .5, {width:width, height:'auto'});
    $scope.adjustImage = function(sign){

      if(sign){
        width = width + 30;
      }
      else{
        width = width - 30;
      }
      TweenMax.to('.textAngularContent img', .5, {width:width, height:'auto'});
    }

    //$scope.filterRecipies = $scope.recipes;
    //Return Top new 3 Items
    $scope.query = function(){
      var query = ref.orderByChild("timestamp").limitToLast(3);

      var recipes = $firebaseArray(query);

      //once loaded remove
      //recipes.$loaded(function(snapshot){
      //  angular.forEach(recipes, function(value, key) {
      //    console.log(value);
      //    recipes.$remove(value).then(function(ref) {
      //      console.log(ref.key());
      //      console.log(value.$id);
      //    })
      //  });
      //});
    };

    $scope.update = function(target, index){
      console.log(target);
      console.log(index);
      $mdDialog.show({
        controller: DialogController,
        locals:{target : target, index:index},
        templateUrl: 'views/template/dialog.html',
        parent: angular.element(document.body),
      })
        .then(function(answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.alert = 'You cancelled the dialog.';
        });
    }

    $scope.delete = function(index) {
      console.log('delete: '+index);
      var item = $scope.recipes[index];
      $scope.recipes.$remove(item).then(function(ref) {
        ref.key() === item.$id; // true
      });
    }

    $scope.toggleTitle = function(toggle){
      toggle != toggle;
      return toggle
    }

    //MD Dialog
    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        locals:{target : null, index: null},
        templateUrl: 'views/template/dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
        .then(function(answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.alert = 'You cancelled the dialog.';
        });
    };

    $( window ).resize(function() {
      console.log('width changed '+ $('.textAngularContent').width());
      $scope.width = $('.textAngularContent').width();
    });

    $scope.removeComment = function(recipeObj, cmtIndex){
      console.log('start remove');
      var ref= FirebaseRefFactory.getRef();
      ref = ref.child(recipeObj.$id).child('comments');
      var comments = $firebaseArray(ref);
      comments.$loaded()
        .then(function(x) {
          x === comments; // true
          console.log(x);

          comments.$remove(comments[cmtIndex]).then(
            function(ref){
              console.log(ref)
              console.log('removed');
            }
          );

        })
        .catch(function(error) {
          console.log("Error:", error);
        });
      comments.$remove(comments[cmtIndex]).then(
        function(ref){
          console.log(ref)
          console.log('removed');
        }
      );
    }



  });


//
//
//angular.module('reviewboxApp').directive('autoGrow', function() {
//  return function(scope, element, attr){
//    var minHeight = element[0].offsetHeight,
//      paddingLeft = element.css('paddingLeft'),
//      paddingRight = element.css('paddingRight');
//
//    var $shadow = angular.element('<div></div>').css({
//      position: 'absolute',
//      top: -10000,
//      left: -10000,
//      width: element[0].offsetWidth - parseInt(paddingLeft || 0) - parseInt(paddingRight || 0),
//      fontSize: element.css('fontSize'),
//      fontFamily: element.css('fontFamily'),
//      lineHeight: element.css('lineHeight'),
//      resize:     'none'
//    });
//    angular.element(document.body).append($shadow);
//
//    var update = function() {
//      var times = function(string, number) {
//        for (var i = 0, r = ''; i < number; i++) {
//          r += string;
//        }
//        return r;
//      }
//
//      var val = element.val().replace(/</g, '&lt;')
//        .replace(/>/g, '&gt;')
//        .replace(/&/g, '&amp;')
//        .replace(/\n$/, '<br/>&nbsp;')
//        .replace(/\n/g, '<br/>')
//        .replace(/\s{2,}/g, function(space) { return times('&nbsp;', space.length - 1) + ' ' });
//      $shadow.html(val);
//
//      element.css('height', Math.max($shadow[0].offsetHeight + 10 /* the "threshold" */, minHeight) + 'px');
//    }
//
//    element.bind('keyup keydown keypress change', update);
//    update();
//  }
//});
