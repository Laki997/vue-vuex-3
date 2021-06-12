<template>
  <div>
    <div>
      <div>
        <ul>
          <div>
            <movie-row
              v-for="(movie, index) in allMovies"
              :key="index"
              :movie="movie"
              >Movies</movie-row
            >
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/";

import { mapActions, mapGetters } from "vuex";
import MovieRow from "./MovieRow.vue";
export default {
  components: { MovieRow },
  name: "movies",
  computed: {
    ...mapGetters({ allMovies: "movies/filteredMovies" }),
  },

  watch: {
    allMovies() {
      if (!this.allMovies.length) {
        alert("Nazalost ne postoje filmovi sa navedenim titlom!");
      }
    },
  },

  methods: {
    ...mapActions({ getAllMovies: "movies/getAllMovies" }),
  },

  async beforeRouteEnter(to, from, next) {
    await store.dispatch("movies/getAllMovies");

    next();
  },
};
</script>

<style scoped></style>
