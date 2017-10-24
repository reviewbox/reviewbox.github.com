'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:LeftsidectrlCtrl
 * @description
 * # LeftsidectrlCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('LeftsidectrlCtrl', function ($scope, $timeout, $location, $mdSidenav, $log) {
    $scope.close = function (location) {

      $location.path(location);
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  });
