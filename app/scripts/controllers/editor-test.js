'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:EditorTestCtrl
 * @description
 * # EditorTestCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('EditorTestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var elements = document.querySelectorAll('.editable'),
      editor = new MediumEditor(elements);

    $(function () {
      $('.editable').mediumInsert({
        editor: editor
      });
    });

  });
