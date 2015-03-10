'use strict';

angular.module('techRadarApp')
  .controller('JsRadarCtrl', function ($scope) {
    $scope.chart_config = new JS_data_provider_v1().get_data();
    $scope.title = "JS TECH RADAR";

  });
