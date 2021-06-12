export default {
  getAll(state, movies) {
    state.allMovies = movies;
  },

  setSearchTerm(state, searchTerm) {
    state.searchTerm = searchTerm;
  },
};
