// lab.js - lab 11 jquery
// Author: Oliver Mason
// Date: 5/18/23

$(".minor-section").append("<button class='btn btn-secondary change'>button</button>");

$(".change").click(function(){
    $(this).parent().toggleClass("special")
})
