import movieService from "../../services/movieService";

export default {
  async getAllMovies(store) {
    const data = await movieService.getAll();

    store.commit("getAll", data);
  },
};
