'use strict';

angular.module("techRadarApp")
  .controller("CiRadarCtrl", function($scope, $routeParams) {
    console.log("finished give value")
    var radar_name = $routeParams.radar_name;
    var data = [];
    if(radar_name == "CI-PKG TECH RADAR") {
      data = new CI_data_provider().get_data();
    }
    if(radar_name == "JS TECH RADAR") {
      data = new JS_data_provider_v1().get_data();
    }
      $scope.chart_config = data;
      $scope.title = radar_name;
  });
