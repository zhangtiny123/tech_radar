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
