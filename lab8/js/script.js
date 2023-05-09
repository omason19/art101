/*
* Author: Oliver Mason
* Created: May 8, 2023
* Title: Lab 8 Anon functions and callbacks
*/

function square(x){
    return (x * x);
}

// returns
console.log("4 squared is: ", square(4));
console.log("9 squared is: ", square(9));

array = [100, 7, 49, 1, 3.8]
console.log("My array: ", array);

var results = array.map(square);
console.log("Test of square array", results);


var results = array.map(function(x){
    return x + 34;
})
console.log("Array + 34 =", results) ;

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = results; // put your results here
