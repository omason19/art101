// lab.js - lab12 conditionals
// Author: Oliver Mason
// Date: 5/23/23

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortingHat(str) {
  var length = str.length;
  var mod = length % 4;
  if(mod == 0){
    return "Gryffindor";
  } else if(mod == 1){
    return "Hufflepuff";
  } else if(mod == 2){
    return "Ravenclaw";
  } else {
    return "Slytherin";
  }

}

var input = document.getElementById("button");
input.addEventListener("click", function(){
    inputValue = document.getElementById('input').value;
    var sortedHouse = sortingHat(inputValue);
    var text = "<p>The Sorting Hat has sorted you into " + sortedHouse + "</p>"
    document.getElementById("output").innerHTML = text;
});
