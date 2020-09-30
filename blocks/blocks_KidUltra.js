Blockly.Blocks['kidultra_distance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("KidUltra get distance (cm)");
    this.setOutput(true, "Number");
    this.setColour(240);
    this.setTooltip("get distance from HC-SR04");
    this.setHelpUrl("https://www.ioxhop.com/p/1071");
  }
};