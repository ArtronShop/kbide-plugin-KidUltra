Blockly.JavaScript['kidultra_distance'] = function (block) {
	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 21, SCL_PIN = 22; 

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino' || board_name == 'openkb') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
  code += '#EXTINC#include <KidUltra.h>#END';
  code += '#EXTINC#include <Wire.h>#END';
  code += '#SETUP' + WIRE_OBJ + '.begin(' + SDA_PIN + ', ' + SCL_PIN + ');#END';
	code += 'KidUltra_read(&' + WIRE_OBJ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};