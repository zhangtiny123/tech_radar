'use strict';

/**
 * @ngdoc overview
 * @name techRadarApp
 * @description
 * # techRadarApp
 *
 * Main module of the application.
 */
angular
  .module('techRadarApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
