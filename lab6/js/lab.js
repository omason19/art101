// index.js - purpose and description here
// Author: Your Name
// Date:

//Variables
myTransport = ["Ford Mustang ", " Bus ", " Friends ", " Skateboard "];

//mainRide Object
myMainRide = {
  make: "Ford",
  model: "Mustang",
  color: "White",
  year: 2000,
  age : function() {
    return 2023 - this.year;
  }
}


//output
document.writeln("My ways of getting around are: " + myTransport + "<br>");
//output of object
document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
