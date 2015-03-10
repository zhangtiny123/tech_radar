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
      .when('/js_radar', {
        templateUrl: 'views/js_radar.html',
        controller: 'JsRadarCtrl'
      })
      .when('/ci_radar/:radar_name', {
        templateUrl: 'views/ci_radar.html',
        controller: 'CiRadarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
