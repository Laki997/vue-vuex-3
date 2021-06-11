import movieService from "../../services/movieService";

export default {
  async getAllMovies(store) {
    const data = await movieService.getAll();
    console.log(data);

    store.commit("getAll", data);
  },
};
