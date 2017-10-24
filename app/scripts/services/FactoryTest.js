angular.module('reviewboxApp')
	.factory('testFactory', function (){

		var var1 = 'varialble1';
		return {
			set: function(){
				var1 = "hello world";
			},
			get: function(){
				return var1;
			}
		}
	});