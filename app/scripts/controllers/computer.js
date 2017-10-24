'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:ComputerCtrl
 * @description
 * # ComputerCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('ComputerCtrl', function ($scope, $http, $timeout, $mdSidenav, $log
  ,FBURL,$firebaseArray) {
    $scope.crntBuild = {
      //cpu:{name:'', price:''},
      //graphic:{},
      //memory:{},
      //hdd:{},
      //sdd:{},
      //case:{},
      //total:{}
    };



    $scope.selectPart = function(partObj, type){
      console.log(type);
      if(type==='cpu'){
        $scope.crntBuild.cpu ={
          name : partObj.name,
          price : partObj.price
        }
      }
      else if(type==='graphics'){
        $scope.crntBuild.graphic ={
          name : partObj.name,
          price : partObj.price
        }
      }
      else if(type==='memory'){
        $scope.crntBuild.memory ={
          name : partObj.name,
          price : partObj.price
        }
      }
      else if(type==='hdd'){
        $scope.crntBuild.hdd ={
          name : partObj.name,
          price : partObj.price
        }
      }
      else if(type==='ssd'){
        $scope.crntBuild.ssd ={
          name : partObj.name,
          price : partObj.price
        }
      }
      else if(type==='mainboard'){
        $scope.crntBuild.mainboard ={
          name : partObj.name,
          price : partObj.price
        }
      }
      else if(type==='case'){
        $scope.crntBuild.case ={
          name : partObj.name,
          price : partObj.price
        }
      }
      else if(type==='sw'){
        $scope.crntBuild.sw ={
          name : partObj.name,
          price : partObj.price
        }
      }
      $scope.close();
    }

    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          alert('dd');
          $log.debug("close RIGHT is done");
        });
    };

    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };

    var comPartRef = new Firebase(FBURL+'/comParts');
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = function(targetItem){
      $scope.instTarget = targetItem;
      var targetRef = comPartRef.child(targetItem)
      $scope.parts= $firebaseArray(targetRef);
      $scope.parts.type = targetItem;
      $scope.close = function () {
        $mdSidenav('right').close()
          .then(function () {
            $log.debug("close RIGHT is done");
          });
      };

      $mdSidenav('right')
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  });
