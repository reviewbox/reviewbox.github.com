'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:PlacesCtrl
 * @description
 * # PlacesCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('PlacesCtrl', function ($scope, $mdDialog) {
    $scope.orightml = '<h2><br></h2> <h1>멸치 볶음&nbsp;</h1> <p>청고추와 홍고추를 넣어 색감을 주었다.&nbsp;</p> <p><br></p> <p><img src="http://cfs11.tistory.com/image/10/tistory/2010/01/21/21/50/4b584d90562a0" style="width: 100%;" height="327" width="530"><br></p> <p><br></p> <blockquote><p>최고의 가격성능비를 자랑하는 밑반찬</p></blockquote> <h1>두부요리&nbsp;</h1> <p>두부를 쪽파로 모양을 잡은 뒤 간장에 조린다.&nbsp;</p> <p><br></p> <p><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqfducQKhK6P5gZ9lnNOAaLKgYOAjVrMC-PgvN0fl86YVadTno" height="396.988416988417" width="530"><br></p> <p><br></p> <blockquote><p>단백하면서도 짭조름한 최고의 밥도둑</p></blockquote> <p><br></p> <p><br></p> <p><br></p> <p>WYSIWYG Text Editor</p>';
    $scope.htmlcontent = $scope.orightml;

    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
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

  });

function DialogController($scope, $mdDialog, Ref, Auth, $firebaseObject, $firebaseArray, FirebaseRefFactory, target, index) {
  console.log(target);
  console.log(index);
  $scope.authObj = Auth;
  $scope.authData = Auth.$getAuth();

  FirebaseRefFactory.setRef('recipes');
  var recipes = FirebaseRefFactory.arrayObj();

  $scope.textAngularCnt = target;
  //var ref = new Firebase(fbUrl + '/accounts/' + key);
  //$scope.account = $firebase(ref);

  $scope.addRecipes = function(){
    console.log('addRecipes invoked');
    if(target == null)

      recipes.$add({
        user_id: $scope.authData.uid,
        text: $scope.textAngularCnt.text,
        visitNum: 0,
        title: $scope.textAngularCnt.title,
        timestamp: Firebase.ServerValue.TIMESTAMP
      }).then(function(ref){
        var id = ref.key();
        console.log("added record with id " + id);
        recipes.$indexFor(id); // returns location in the array
      });
    else{

      recipes[index].title = $scope.textAngularCnt.title;
      recipes[index].text = $scope.textAngularCnt.text;
      recipes.$save(index).then(function(ref){
        ref.key() === recipes[index].$id;
      }, function(err){console.log(err)})
      //var ref = FirebaseRefFactory.getRef();
      //var dobj = $firebaseObject(Ref.child('recipes/'+target.$id));
      //var obj = $firebaseObject(ref.child(target.$id));
      //obj.title = $scope.textAngularCnt.title;
      //obj.text = $scope.textAngularCnt.text;
      //obj.user_id= $scope.authData.uid;
      //obj.visitNum= 0;
      //obj.$save();
      console.log('update');
      //recipes.$save(target.$id);
    }
    $mdDialog.hide('Updated');
  }

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}