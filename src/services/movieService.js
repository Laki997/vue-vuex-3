import baseService from "./baseService";

class MovieService {
  async getAll() {
    const response = await baseService.get("/movies");

    return response.data;
  }
}

const movieService = new MovieService();
export default movieService;
