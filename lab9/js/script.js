/*
* Created by: Oliver Mason
* Lab 9 Javascript for the web
* May 11, 2023
*/

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML = "something new";

var new2El = document.createElement("p");
new2El.innerHTML = "something else";
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

document.getElementById("header").style.color = "blue";
document.getElementById("header2").style.color = "red";
