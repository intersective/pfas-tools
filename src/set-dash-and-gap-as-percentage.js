export default function(context) {
  const UI = require('sketch/ui');
  const selectedLayers = context.selection;
  const selectedCount = selectedLayers.length;
  const pi = Math.PI;

  if (selectedCount === 0) {
    context.document.showMessage('Please select a circle shape layer');
  } else {
    var percent = UI.getStringFromUser("Percentage (numbers only)", '');
    selectedLayers.forEach(function (layer) {
      var circumference = 2 * pi * (layer.frame().width() / 2);
      var dash = circumference * percent / 100;
      layer.style().borderOptions().dashPattern = [dash, circumference];
    })
  }
}
