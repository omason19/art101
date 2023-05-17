/*
* Created by: Oliver Mason
* Lab 10 Javascript Events and Forms
* May 11, 2023
*/

function inputF(userName){
    console.log("User Name: ", userName);
    var nameArray = userName.split("");
    console.log("Name Array:", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("Sorted Array", nameArraySort);
    var nameSorted = nameArraySort.join();
    console.log("Reorganized User Name", nameSorted);
    return nameSorted;
}

var input = document.getElementById("submit");
input.addEventListener("click", function(){
    inputValue = document.getElementById('user-name').value;
    var sortedName = inputF(inputValue);
    document.getElementById("output").innerHTML = sortedName
});
    

