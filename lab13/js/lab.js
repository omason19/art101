// lab.js - lab13 loops
// author: Oliver Mason
// Date: 5/25/23


for (var i= 1; i <= 100; i++){
	if (i % 3 == 0 && i % 5 == 0){
  document.writeln("FizzBuzz")
  $("#output").append("<div>" + "FizzBuzz");
  } else if (i % 3 ==0){
  document.writeln("Fizz")
  $("#output").append("<div>" + "Buzz");
  } else if(i % 5 == 0){
  document.writeln("Buzz")
  $("#output").append("<div>" + "Fizz");
  } else{
  document.writeln(i)
  $("#output").append("<div>" + i);

  }
}
