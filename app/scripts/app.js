'use strict';

/**
 * @ngdoc overview
 * @name reviewboxApp
 * @description
 * # reviewboxApp
 *
 * Main module of the application.
 */
angular.module('reviewboxApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'ngMaterial',
    'textAngular',
    'cloudinary',
  ]).config(function($mdIconProvider){
    $mdIconProvider
      .iconSet("call", 'dImages/comms.svg', 24)
      .iconSet("social", 'dImages/socials.svg', 24);
});
