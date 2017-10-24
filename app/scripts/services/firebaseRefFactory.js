'use strict';

/**
 * @ngdoc service
 * @name reviewboxApp.RecipeFactory
 * @description
 * # RecipeFactory
 * Factory in the reviewboxApp.
 */
angular.module('reviewboxApp')
  .factory("FirebaseRefFactory", function($firebaseArray, FBURL){
    var ref = new Firebase(FBURL);
    var targetRef;

    return {
      arrayObj: function(){
        return $firebaseArray(targetRef);
      },
      getRef: function(){
        return targetRef;
      },
      setRef: function(refName){
        //console.log(refName);
        targetRef = ref.child(refName);
      }
    }
})
