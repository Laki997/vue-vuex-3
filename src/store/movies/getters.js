export default {
  allMovies: (state) => state.allMovies,
  filteredMovies: (state) =>
    state.allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
};
