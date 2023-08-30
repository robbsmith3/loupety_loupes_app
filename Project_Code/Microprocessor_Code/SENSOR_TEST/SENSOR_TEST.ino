#include <Wire.h>
#include <VL53L0X.h>
int pin1 = A0;

VL53L0X sensor;

voide setup() {
  pinMode(pin1, INPUT_PULLUP);
  digitalWrite(pin1, HIGH);
  Serial.begin(115200);
  Wire.begin();

  sensor.init();
  sensor.setTimeout(500);

  sensor.startContinuous();
}

void loop() {
  int distance = sensor.readRangeContinuousMillimeters();

  Serial.print("Distance: ");

  Serial.print(distance);
  Serial.print("mm");

  if (sensor.timeoutOccurred()) {
    Serial.print(" TIMEOUT");
  }

  Serial.println();
}
