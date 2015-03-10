'use strict';

angular.module('techRadarApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.radars = [
      {
        name: "CI-PKG TECH RADAR"
      },
      {
        name: "JS TECH RADAR"
      }
    ];

    $scope.go_to_radar = function(name) {
        $location.path('/ci_radar/'+name);
    }
  });
