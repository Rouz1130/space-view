var Movie = require('./../js/space.js').movieModule;

$(document).ready(function() {
  var currentMovie = new Movie();
  $('.movie-input').submit(function(event) {
    event.preventDefault();
    var movie = $('#user-input').val();
    $('#user-input').val("");
    currentMovie.getMovie(movie);
    currentMovie.getPoster(movie);
  });
});
