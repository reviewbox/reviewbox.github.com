'use strict';

/**
 * @ngdoc service
 * @name reviewboxApp.gskbProvider
 * @description
 * # gskbProvider
 * Provider in the reviewboxApp.
 */
angular.module('reviewboxApp')
  .provider('GskbProvider', function () {

    // Method for instantiating
    this.$get = ['$resource', function($resource){
      var query = "PR1";
      var url = 'https://pbshop.herokuapp.com/gskbs/query/:query';
      var localUrl = 'http://localhost:3000/gskbs/query/:query';

      var GskbProvider=$resource(url, {"query": ['@magId']}, {
        update:{
          method: 'PUT'
        },
	      post:{
		      method: 'POST'
	      }
      })
      return GskbProvider;
    }];
  });
