int pin0 = A0;
int pin1 = A1;


void setup() {
  Serial.begin(115200);

  pinMode(pin0, OUTPUT);
  pinMode(pin1, OUTPUT);
}


void loop() {
  digitalWrite(pin0, 1);

  digitalWrite(pin1, 0);

  delay(100);

  digitalWrite(pin1, 1);

  delay(100);

}
