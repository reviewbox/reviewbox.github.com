'use strict';

/**
 * @ngdoc function
 * @name reviewboxApp.controller:PrdDetailCtrl
 * @description
 * # PrdDetailCtrl
 * Controller of the reviewboxApp
 */
angular.module('reviewboxApp')
  .controller('PrdDetailCtrl', function ($scope, $routeParams) {

    var prdId = $routeParams.id;
    var moltin = new Moltin({
      publicId: 'b72N8tr8cGSIwizCmUAvmlsGf8Mt7GanOhYMwAn5'
    });

    moltin.Authenticate(function() {
      getProduct(prdId);
    });


    $scope.deleteCart = function(){
      moltin.Cart.Delete(function() {
        // Everything is awesome...
      }, function(error) {
        // Something went wrong...
      });
    }
    function getProduct(id){

      moltin.Product.Get(id, function(product) {
        $scope.product = product;
        $scope.$digest()
        console.log(product);
      }, function(error) {
        // Something went wrong...
      });
    }

    $scope.addCart = function(id, qnt){
      moltin.Cart.Insert(id, qnt, null, function(item) {
      }, function(error) {
        // Something went wrong...
      });
    }

    $scope.checkCart = function(){
      moltin.Cart.Contents(function(items) {
        $scope.cartPrd = items;
        $scope.$digest()
      }, function(error) {

      });
    }

    $scope.payment = function(){
      moltin.Cart.Complete({
        gateway: 'stripe',
        customer: {
          first_name: 'Jon',
          last_name:  'Doe',
          email:      'jon.doe@gmail.com'
        },
        bill_to: {
          first_name: 'Jon',
          last_name:  'Doe',
          address_1:  '123 Sunny Street',
          address_2:  'Sunnycreek',
          city:       'Sunnyvale',
          county:     'California',
          country:    'US',
          postcode:   'CA94040',
          phone:      '6507123124'
        },
        ship_to: 'bill_to',
        shipping: 'USPS'
      }, function(order) {
        console.log(order);
        moltin.Checkout.Payment('purchase', order.id, {
          data: {
            number:       '4242424242424242',
            expiry_month: '02',
            expiry_year:  '2017',
            cvv:          '123'
          }
        }, function(order) {
          console.log(order);
          $scope.deleteCart();
        }, function(error) {
          console.log(error);
        });
        // Handle the order
      }, function(error) {
        console.log(error);
      });


    }
  });
