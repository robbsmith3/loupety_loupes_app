int pin0 = A0; //Setting output A0 equal to the integer pin0
int pin1 = A1; //Setting output A1 equal to the integer pin1
int pin2 = A2; //Setting output A2 equal to the integer pin2 
int pin3 = A3; //Setting output A3 equal to the integer pin3
int pin4 = A4; //Setting output A4 equal to the integer pin4
int pin5 = A5; //Setting output A5 equal to the integer pin5

// Establishing serical communication with the terminal window
void setup() {
  Serial.begin(115200);

  pinMode(pin0, OUTPUT); //Setting pin0 to output
  pinMode(pin1, OUTPUT); //Setting pin1 to output
  pinMode(pin2, OUTPUT); //Setting pin2 to output
  pinMode(pin3, OUTPUT); //Setting pin3 to output
}

// Loop to receive terminal input
void loop() {
  Serial.println("Enter data:");
  while (Serial.available() == 0) {}     //wait for data available
  String teststr = Serial.readString();  //read until timeout
  teststr.trim();                        // remove any \r \n whitespace at the end of the String

  //Conditional statement to change color based on text
  if (teststr == "red") {
    Serial.println("LED changed to red");
    digitalWrite(pin0, 1); //setting pin0 to 1 to output and all other pins to 0
    digitalWrite(pin1, 0);
    digitalWrite(pin2, 0);
    digitalWrite(pin3, 0);

  } 
  //setting pin1 to 1 to output and all other pins to 0
  else if (teststr == "green") {
    Serial.println("LED changed to green");
    digitalWrite(pin0, 0); 
    digitalWrite(pin1, 1);
    digitalWrite(pin2, 0);
    digitalWrite(pin3, 0);
  }

  //setting pin2 to 1 to output and all other pins to 0
  else if (teststr == "blue") {
    Serial.println("LED changed to blue");
    digitalWrite(pin0, 0); 
    digitalWrite(pin1, 0);
    digitalWrite(pin2, 1);
    digitalWrite(pin3, 0);
  }

  //setting pin3 to 1 to output and all other pins to 0
  else if (teststr == "white") {
    Serial.println("LED changed to white");
    digitalWrite(pin0, 0);
    digitalWrite(pin1, 0);
    digitalWrite(pin2, 0);
    digitalWrite(pin3, 1);
  }

  
}
