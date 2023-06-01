// lab.js - lab 15 ajax
// Author: Oliver Mason
// Date: 6/1/23


$('#activate').click(function(){
  
  var randomId = Math.floor(Math.random() * 898) + 1
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (ENDPOINT)
    url: "https://pokeapi.co/api/v2/pokemon/" + randomId,
    type: "GET",
    dataType : "json",
    success: function(data){
      var pokemonName = data.name;
      var pokemonImage = $("<img>").attr("src", data.sprites.front_default);

      $("#output").empty();
      // Append the Pokémon name and image to the container div
      $("#output").append("<p>" + pokemonName + "</p>");
      $("#output").append(pokemonImage);
    },
    error: function(error) {
      console.log("Error:", error);
    }
  });
});
