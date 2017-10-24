angular.module('firebase.config', [])
  .constant('FBURL', 'https://reviewbox.firebaseio.com')
  //.constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google','twitter','github'])
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google'])
  .constant('loginRedirectPath', '/login');