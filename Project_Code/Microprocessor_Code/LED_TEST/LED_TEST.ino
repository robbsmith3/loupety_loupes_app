int pin0 = A0;
int pin1 = A1;
int pin2 = A2;
int pin3 = A3;
int pin4 = A4;
int pin5 = A5;


void setup() {
  Serial.begin(115200);

  pinMode(pin0, OUTPUT);
  pinMode(pin1, OUTPUT);
  pinMode(pin2, OUTPUT);
  pinMode(pin3, OUTPUT);
}


void loop() {
  Serial.println("Enter data:");
  while (Serial.available() == 0) {}     //wait for data available
  String teststr = Serial.readString();  //read until timeout
  teststr.trim();                        // remove any \r \n whitespace at the end of the String
  if (teststr == "red") {
    Serial.println("LED changed to red");
    digitalWrite(pin0, 1);
    digitalWrite(pin1, 0);
    digitalWrite(pin2, 0);
    digitalWrite(pin3, 0);

  } 
  else if (teststr == "green") {
    Serial.println("LED changed to green");
    digitalWrite(pin0, 0);
    digitalWrite(pin1, 1);
    digitalWrite(pin2, 0);
    digitalWrite(pin3, 0);
  }

  else if (teststr == "blue") {
    Serial.println("LED changed to blue");
    digitalWrite(pin0, 0);
    digitalWrite(pin1, 0);
    digitalWrite(pin2, 1);
    digitalWrite(pin3, 0);
  }

  else if (teststr == "white") {
    Serial.println("LED changed to white");
    digitalWrite(pin0, 0);
    digitalWrite(pin1, 0);
    digitalWrite(pin2, 0);
    digitalWrite(pin3, 1);
  }

  
}