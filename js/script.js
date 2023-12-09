document.addEventListener("DOMContentLoaded", () => {
  const movies = [
    "The Matrix",
    "Inception",
    "Interstellar",
    "The Godfather",
    `Schindler's List `,
    "Forrest Gump ",
    "Pulp Fiction",
    "The Shawshank Redemption",
    "Fight Club",
    "The Dark Knight",
    "Inception",
    "Interstellar",
    "Parasite",
    "1917",
    "Joker",
    "Gladiator",
    "Whiplash",
    "The Grand Budapest Hotel",
    "Avengers: Endgame",
  ];
  movies.forEach((movieTitle) => {
    fetchMovieData(movieTitle);
  });
});

function fetchMovieData(movieTitle) {
  const apiKey = "71d729ce";
  const url = `http://www.omdbapi.com/?t=${encodeURIComponent(
    movieTitle
  )}&apikey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayMovieData(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function displayMovieData(movie) {
  const movieInfoDiv = document.getElementById("movieInfo");
  const imdbUrl = `https://www.imdb.com/title/${movie.imdbID}/`;

  const movieElement = document.createElement("div");
  movieElement.className = "movie-container"; // Adding a class name to the div

  movieElement.innerHTML = `
        <h1 class='movieTitle'><a class='movieLink' href="${imdbUrl}" target="_blank">${movie.Title} (${movie.Year})</a></h1>
        <p class="movieInformation">${movie.Plot}</p>
        <img class='movieImg' src="${movie.Poster}" alt="Poster of ${movie.Title}">
    `;

  movieInfoDiv.appendChild(movieElement);
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    localStorage.clear();

    window.location.href = "index.html";
  });
}
