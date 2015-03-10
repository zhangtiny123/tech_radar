'use strict';

describe('Controller: Radar01Ctrl', function () {

  // load the controller's module
  beforeEach(module('techRadarApp'));

  var Radar01Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Radar01Ctrl = $controller('Radar01Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.chart_config.length).toBe(52);
  });
});
