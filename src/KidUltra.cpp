#include "KidUltra.h"

#define HC_SR04_ADDR 0x57

uint32_t KidUltra_read(TwoWire *bus) {
	bus->beginTransmission(HC_SR04_ADDR);
	bus->write(0x01);
	bus->endTransmission();
	delay(200);
	bus->beginTransmission(HC_SR04_ADDR);
	bus->write(0xAF);
	bus->endTransmission();
	int n = bus->requestFrom(HC_SR04_ADDR, 3);
	if (n != 3) {
		Serial.println("I2C Error");
		return -1;
	}
	uint8_t BYTE_H = bus->read();
	uint8_t BYTE_M = bus->read();
	uint8_t BYTE_L = bus->read();
	uint32_t d = (((uint32_t)BYTE_H << 16) + ((uint32_t)BYTE_M << 8) + (uint32_t)BYTE_L) / 1000.0;
	d = d / 10;

	return d;
}
