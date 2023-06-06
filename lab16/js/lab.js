// index.js - purpose and description here
// Author: Your Name
// Date:

var URL = "https://xkcd.com/info.0.json";

// https://xkcd.com/json.html
// endpoint https://xkcd.com/456/info.0.json
var URLpre = "https://cors-anywhere.herokuapp.com/https://xkcd.com/";
var URLpost = "info.0.json";

// Endpoint format: http://xkcd.com/614/info.0.json

function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
  // get data via ajax from numbersapi
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (using the CORS Anywhere proxy)
    url: ourURL,
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What to do when the API call is successful
    success: function (comicObj) {
      // Process the parts and add them to the webpage
      var section = document.createElement("section");
      var title = document.createElement("h1");
      var image = document.createElement("img");

      title.textContent = comicObj.title;
      image.src = comicObj.img;
      image.alt = comicObj.alt;
      image.title = comicObj.alt;

      section.appendChild(title);
      section.appendChild(image);

      document.body.appendChild(section);
    },
    // What to do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // Handle the error
      console.log("Error:", textStatus, errorThrown);
    },
  });

}

// start things off
getComic();