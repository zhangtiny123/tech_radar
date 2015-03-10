'use strict';

/**
 * @ngdoc function
 * @name techRadarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the techRadarApp
 */
angular.module('techRadarApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
