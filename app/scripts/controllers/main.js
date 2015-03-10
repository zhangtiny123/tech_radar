'use strict';

/**
 * @ngdoc function
 * @name techRadarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techRadarApp
 */
angular.module('techRadarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
