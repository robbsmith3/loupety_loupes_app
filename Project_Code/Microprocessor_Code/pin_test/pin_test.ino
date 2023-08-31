int pin0 = A0; //Setting output A0 equal to pin0
int pin1 = A1; //Setting output A1 equal to pin1

// setup serial communication
void setup() {
  Serial.begin(115200);

  pinMode(pin0, OUTPUT); //setting pin0 to output
  pinMode(pin1, OUTPUT); //setting pin0 to output
}

//simple loop to test different pinmodes
void loop() {
  digitalWrite(pin0, 1); //Turning pin1 on

  digitalWrite(pin1, 0); //Turning pin0 off

  delay(100);

  digitalWrite(pin1, 1);  //Turning pin1 on

  delay(100);

}
