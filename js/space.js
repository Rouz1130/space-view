function Movie() {}
var posterLink = null;

Movie.prototype.getMovie = function(movie) {
  $.get('http://netflixroulette.net/api/api.php?title=' + movie, function(response) {
    $('.showMovie').text(response.show_title + " was directed by " + response.director + " and stars " + response.show_cast);
  });
};

Movie.prototype.getPoster = function(movie) {
  $.get('http://netflixroulette.net/api/api.php?title=' + movie,
  function(response) {
    posterLink = response.poster;
    console.log(posterLink);
  });
};

exports.movieModule = Movie;
