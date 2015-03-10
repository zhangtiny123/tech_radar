/**
 * Created by taozhang on 3/9/15.
 */
angular.module("techRadarApp").directive("chart", function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      config: '=',
      title: '='
    },
    template: '<div id="chartdiv" class="main-background"> ',
    link  : function(scope, element, attrs) {
      AmCharts.ready(function () {
        var chart;
        chart = new AmCharts.AmRadarChart();
        chart.dataProvider = scope.config;
        chart.categoryField = "category";
        chart.startDuration = 0;
        chart.radius = "40%";
        chart.realRadius = 20;

        chart.addTitle(scope.title, 15);

        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.gridType = "circles";
        valueAxis.fillAlpha = 0.05;   //圆环内部颜色的深浅 1黑色  0白色
        valueAxis.fillColor = "#000000";
        valueAxis.axisAlpha = 0.02;  //坐标轴的颜色深浅  1黑色   0白色
        valueAxis.gridAlpha = 0;  //调整线条圆环边界线的颜色深浅 1黑色线  0白色线
        valueAxis.fontWeight = "bold";
        valueAxis.minimum = 0;
        chart.addValueAxis(valueAxis);

        var graph = new AmCharts.AmGraph();
        graph.lineColor = "#FFCC00";
        graph.fillAlphas = 0;
        graph.bullet = "triangleUp";
        graph.bulletBorderThickness = 2;
        graph.bulletBorderColor = "#000000";
        graph.bulletBorderAlpha = 0.5;
        graph.lineAlpha = 0;
        graph.valueField = "value";
        graph.balloonText = "[[name]]: [[description]]";
        chart.addGraph(graph);

        //var guides = [];
        //guides.push(getGuide(0, 360, 0, 5, "DimGray", 0.6));
        //guides.push(getGuide(0, 360, 5, 10, "Gray", 0.6));
        //guides.push(getGuide(0, 360, 10, 15, "DarkGray", 0.6));
        //guides.push(getGuide(0, 360, 15, 20, "Silver", 0.6));
        //
        //
        //valueAxis.addGuide(guides);

        valueAxis.addGuide(getGuide(0, 360, 0, 5, "DimGray", 0.6));
        valueAxis.addGuide(getGuide(0, 360, 5, 10, "Gray", 0.6));
        valueAxis.addGuide(getGuide(0, 360, 10, 15, "DarkGray", 0.6));
        valueAxis.addGuide(getGuide(0, 360, 15, 20, "Silver", 0.6));

        chart.allLabels = [
          {
            "text": "采用",
            "x": 622,
            "y": 410
          },
          {
            "text": "试验",
            "x": 592,
            "y": 460
          },
          {
            "text": "评估",
            "x": 560,
            "y": 520
          },
          {
            "text": "暂缓",
            "x": 528,
            "y": 580
          }
        ];
        console.log("run directive")

        chart.write(attrs.id);
      });

      function getGuide(startAngle, toAngle, value, toValue, fillColor, fillAlpha) {
        var guide = new AmCharts.Guide();
        guide.angle = startAngle;
        guide.tickLength = 0;
        guide.toAngle = toAngle;
        guide.value = value;
        guide.toValue = toValue;
        guide.fillColor = fillColor;
        guide.fillAlpha = fillAlpha;
        return guide;
      }
    }
  }
});
