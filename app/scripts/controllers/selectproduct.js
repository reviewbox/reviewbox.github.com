'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:SelectproductCtrl
 * @description
 * # SelectproductCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('SelectproductCtrl', function ($scope, $location) {

    var moltin = new Moltin({
      publicId: 'b72N8tr8cGSIwizCmUAvmlsGf8Mt7GanOhYMwAn5'
    });

    moltin.Authenticate(function() {
      getProducts();
    });


    function getProducts (){


      moltin.Product.Search({category: 'Clippers', limit: 42}, function(response) {
        $scope.products = response;
        $scope.$digest()
        console.log(response);
      })
    }

    $scope.goTo = function(id){
      $location.path('prd-detail/'+id);
    }


  });
