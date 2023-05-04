// lab.js - purpose and description here
// Author: Oliver Mason
// Date: 5/3/2023

function inputF(){
    var userName = window.prompt("Please enter your user name")
    console.log("User Name: ", userName);
    var nameArray = userName.split("");
    console.log("Name Array:", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("Sorted Array", nameArraySort);
    var nameSorted = nameArraySort.join();
    console.log("Reorganized User Name", nameSorted);
    return nameSorted;
}

document.writeln("Your name has been fixed:",
    inputF(), "</br>");