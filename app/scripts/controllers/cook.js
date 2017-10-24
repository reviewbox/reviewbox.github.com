'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:CookCtrl
 * @description
 * # CookCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('CookCtrl', function ($scope, $timeout, $window, Upload, $firebaseAuth, $firebaseObject, $firebaseArray,
                                    Auth, $mdDialog, cookBoard, FBURL, BookFactory, $rootScope) {

    $scope.preview = [];
    function filesPreview(files){
      console.log(files);
      files.forEach(function(file){
        $scope.upload = Upload.upload({
          url: "https://api.cloudinary.com/v1_1/" + $.cloudinary.config().cloud_name + "/upload",
          fields: {upload_preset: $.cloudinary.config().upload_preset, tags: 'myphotoalbum', context:'photo=' + $scope.title},
          file: file
        }).progress(function (e) {
          file.progress = Math.round((e.loaded * 100.0) / e.total);
          file.status = "Uploading... " + file.progress + "%";
          if(!$scope.$$phase) {
            $scope.$apply();
          }
        }).success(function (data, status, headers, config) {
          $rootScope.photos = $rootScope.photos || [];
          data.context = {custom: {photo: $scope.title}};
          file.result = data;
          $rootScope.photos.push(data);
          if(!$scope.$$phase) {
            $scope.$apply();
          }
        });
      });
    }

    //
    $scope.publish = function(){
      filesPreview($scope.preview);
    }

    $scope.$watch('files', function() {
      //if (!$scope.files) return;
      //filesPreview($scope.files)
      $timeout(function() {
        angular.forEach($scope.files, function(value, key) {
          $scope.preview.push(value);
        });
      }, 250); // delay 250 ms
    });

    /* Modify the look and fill of the dropzone when files are being dragged over it */
    $scope.dragOverClass = function($event) {
      var items = $event.dataTransfer.items;
      var hasFile = false;
      if (items != null) {
        for (var i = 0 ; i < items.length; i++) {
          if (items[i].kind == 'file') {
            hasFile = true;
            break;
          }
        }
      } else {
        hasFile = true;
      }
      return hasFile ? "dragover" : "dragover-err";
    };


    $scope.notificationsEnabled = true;
    $scope.toggleNotifications = function() {
      $scope.notificationsEnabled = !$scope.notificationsEnabled;
    };
    $scope.redial = function(e) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Suddenly, a redial')
          .content('You just called someone back. They told you the most amazing story that has ever been told. Have a cookie.')
          .ok('That was easy')
      );
    };

    $scope.checkVoicemail = function() {
      // This never happens.
    };


    $scope.proLineUp = false;
    var promise = new Promise(function (resolve){
      setTimeout(function(){
        resolve(42);
      }, 300);
      //console.log('promise started');
    });
    promise.then(function(x){
        $scope.proLineUp = true;
        //console.log($scope.proLineUp);
        $scope.$digest();
      }
    )


    $scope.proLines = [
      {name:'Pro Line® Series Espresso Maker with Dual Independent Boilers', desc:'', imagePath:'dImages/pro/pro1.png'},
      {name:'Pro Line® Series 16-Cup Food Processor with Commercial-Style Dicing', desc:'', imagePath:'dImages/pro/pro2.png'},
      {name:'KitchenAid® Pro Line® Series 7-Qt Bowl Lift Stand Mixer', desc:'', imagePath:'dImages/pro/pro3.png'},
      //{name:'Pro Line® Series 4-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro4.png'},
      //{name:'Pro Line® Series 2-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro5.png'},
      //{name:'Pro Line® Series 5-Speed Cordless Hand Blender', desc:'', imagePath:'dImages/pro/pro6.png'},
      //{name:'Pro Line® Series Electric Kettle', desc:'', imagePath:'dImages/pro/pro7.png'},
      //{name:'KitchenAid® Pro Line® Series 7-Qt Bowl Lift Stand Mixer', desc:'', imagePath:'dImages/pro/pro8.png'},
      //{name:'Pro Line® Series 4-Slice Automatic Toaster', desc:'', imagePath:'dImages/pro/pro9.png'},
      //{name:'Pro Line® Series 5-Speed Cordless Hand Blender', desc:'', imagePath:'dImages/pro/pro10.png'},
      //{name:'Pro Line® Series Electric Kettle', desc:'', imagePath:'dImages/pro/pro11.png'},
    ];


    var auth = Auth;
    $scope.popupLogin = function(){
      auth.$authWithOAuthPopup("google").then(function(authData) {
        console.log("Logged in as:", authData.uid);
      }).catch(function(error) {
        console.log("Authentication failed:", error);
      });
    }

    //$scope.user = user;


    var ref = new Firebase(FBURL+'/messages');
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    $scope.messages = $firebaseArray(ref);

    $scope.addMessage = function() {
      $scope.messages.$add({
        text: $scope.newMessageText,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });
      console.log(Firebase.ServerValue.TIMESTAMP);
    };

    var fb = new $window.Firebase(FBURL+'/book1');
    $scope.data = $firebaseObject(fb);
    fb.set({
      title: "Grapes of Wrath",
      author: "John Steinbeck",
      date: Date.now() - 3600 * 1000 * 24 * 72 // 72 days ago
    });

    $scope.book = new BookFactory(fb);


    // changes the date on a book record, note that we're working
    // with Date objects here
    $scope.setDate = function(book) {
      console.log(book);
      book.date = new Date();
      book.$save();
    };


    $scope.readonly = false;
    $scope.tags = ['아보카도', '캐찹', '올리브오'];

    //$scope.gridOptions = cookBoard.getGridOptions();

    $scope.orightml = '<h2><br></h2> <h1>멸치 볶음&nbsp;</h1> <p>청고추와 홍고추를 넣어 색감을 주었다.&nbsp;</p> <p><br></p> <p><img src="http://cfs11.tistory.com/image/10/tistory/2010/01/21/21/50/4b584d90562a0" style="width: 100%;" height="327" width="530"><br></p> <p><br></p> <blockquote><p>최고의 가격성능비를 자랑하는 밑반찬</p></blockquote> <h1>두부요리&nbsp;</h1> <p>두부를 쪽파로 모양을 잡은 뒤 간장에 조린다.&nbsp;</p> <p><br></p> <p><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqfducQKhK6P5gZ9lnNOAaLKgYOAjVrMC-PgvN0fl86YVadTno" height="396.988416988417" width="530"><br></p> <p><br></p> <blockquote><p>단백하면서도 짭조름한 최고의 밥도둑</p></blockquote> <p><br></p> <p><br></p> <p><br></p> <p>WYSIWYG Text Editor</p>';
    $scope.htmlcontent = $scope.orightml;
    $scope.disabled = false;
  });

angular.module('reviewboxApp').factory('BookFactory', function ($firebaseObject) {
  return $firebaseObject.$extend({
    /**
     * Called each time there is an update from the server
     * to update our Book data
     */
    $$updated: function (snap) {
      // call the super
      var changed = $firebaseObject.prototype
        .$$updated.apply(this, arguments);
      // manipulate the date
      if( changed ) {
        this.date = new Date(this.date||0);
      }
      // inform the sync manager that it changed
      return changed;
    },

    /**
     * Used when our book is saved back to the server
     * to convert our dates back to JSON
     */
    toJSON: function() {
      return angular.extend({}, this, {
        // revert Date objects to json data
        date: this.date? this.date.getTime() : null
      });
    }
  });
});