/*
* Created by: Oliver Mason
* Lab 10 Javascript Events and Forms
* May 16, 2023
*/

function inputF(){
    var userName = document.getElementById(userName);
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