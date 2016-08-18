var View = require('./../js/space.js').viewModule;


$(document).ready(function() {
  $('.movie-input').submit(function(event) {
    event.preventDefault();
    var movie = $('#user-input').val();
    $('#user-input').val("");
    $('.showMovie').text("Information about " + movie);
    $.get('http://netflixroulette.net/api/api.php?title=' + movie, function(response) {
      console.log(response);
    });
  });
});
