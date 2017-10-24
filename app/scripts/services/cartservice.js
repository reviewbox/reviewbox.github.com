'use strict';

/**
 * @ngdoc service
 * @name reviewboxApp.cartService
 * @description
 * # cartService
 * Factory in the reviewboxApp.
 */

angular.module('reviewboxApp').factory('Moltin', function($rootScope, $location){
  //# Start SDK
  var moltin = new Moltin;
  var publicId = "b72N8tr8cGSIwizCmUAvmlsGf8Mt7GanOhYMwAn5";
  function notice(type, msg, code){
    if( code == '404'){
      $rootScope.error = code;
      $location.path('/error');
    }
    else{
      $rootScope.notices = []
      if(type == 'error')
        type =  'danger';
      else
        type = type;
      if( typeof msg == 'string')
        $rootScope.notices.push ({type: type, msg: msg});
      else{
        msg.forEach(function(p){
          data = '';
          if( typeof p == 'string')
            data = p;
          else
            data += v+'<br />';
          $rootScope.notices.push({type: type, msg: data})
        })
      }
    }
    $rootScope.$apply()
  }

  return moltin.Authenticate();
})


angular.module('reviewboxApp')
  .factory('cartService', function () {

    // Public API here
    return {
      contents: function () {
        moltin.Cart.Contents(function(items){

        })
      }
    };
  });
