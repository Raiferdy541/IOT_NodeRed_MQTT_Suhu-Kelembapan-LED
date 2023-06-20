#include "ESP8266WiFi.h"

const char server[] = "192.168.56.1"; 
const char* MY_SSID = "raihanbaik";
const char* MY_PWD =  "passwordnyaapaya";
WiFiClient client;


#define triggerPin  D1
#define echoPin     D2
#define LED         D0 
#define DHTTYPE DHT11   // DHT 11

const int DHTPin = 2; //GPIO2 D4
DHT dht(DHTPin, DHTTYPE); // Initialize DHT sensor.

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
  Serial.print("Connecting to "+*MY_SSID);
  WiFi.begin(MY_SSID, MY_PWD);
  Serial.println("going into wl connect");

  while (WiFi.status() != WL_CONNECTED) //not connected,  ...waiting to connect
    {
      delay(2000);
      Serial.print(".");
    }
  Serial.println("wl connected");
  Serial.println("");
  Serial.println("Credentials accepted! Connected to wifi\n ");
  Serial.println("");
  
  pinMode(triggerPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(115200); 
}

void loop() {

  long duration, jarak;

    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
    float h = dht.readHumidity();
    // Read temperature as Celsius (the default)
    float t = dht.readTemperature();
    // Read temperature as Fahrenheit (isFahrenheit = true)
    float f = dht.readTemperature(true);

    // Check if any reads failed and exit early (to try again).
    if (isnan(h) || isnan(t) || isnan(f)) {
      Serial.println("Failed to read from DHT sensor!");
      return;
    }

    // Computes temperature values in Celsius
    float hic = dht.computeHeatIndex(t, h, false);
    static char temperatureTemp[7];
    dtostrf(hic, 6, 2, temperatureTemp);

    // Uncomment to compute temperature values in Fahrenheit 
    // float hif = dht.computeHeatIndex(f, h);
    // static char temperatureTemp[7];
    // dtostrf(hif, 6, 2, temperatureTemp);
    
    static char humidityTemp[7];
    dtostrf(h, 6, 2, humidityTemp);
  
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2); 
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10); 
  digitalWrite(triggerPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  jarak = (duration/2) / 29.1;
  Serial.print("Jarak Sensor: ");
  Serial.println(jarak);


 if (jarak <= 10 ){
    digitalWrite(LED, HIGH); 
    Serial.println("JARAK TERLALU DEKAT, SEGERA MENJAUH");
      }
   
 else {
  digitalWrite(LED, LOW); 
  Serial.println("JARAK  AMAN");
  }

    Serial.print("Humidity: ");
    Serial.print(h);
    Serial.print(" %\t Temperature: ");
    Serial.print(t);
    Serial.print(" *C ");
    Serial.print(f);
    Serial.print(" *F\t Heat index: ");
    Serial.print(hic);
    Serial.println(" *C ");
    // Serial.print(hif);
    // Serial.println(" *F");


  Serial.println("\nStart koneksi ke server..."); 
  // Apabila terhubung, akan ada laporan via serial:
  if (client.connect(server, 80)) {
    Serial.println("connected to server");
    WiFi.printDiag(Serial);

  client.print("GET iot_rai/load.php?jarak=");
  client.print(jarak);
  client.println(" HTTP/1.1");
  client.println("Host: 192.168.56.1");
  client.println();
  delay(2000);
}
}
