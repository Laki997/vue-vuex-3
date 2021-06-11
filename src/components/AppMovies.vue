<template>
  <div>
    <div>
      <ul>
        <movie-row
          v-for="(movie, index) in allMovies"
          :key="index"
          :movie="movie"
          >Movies</movie-row
        >
      </ul>
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
    ...mapGetters({ allMovies: "movies/allMovies" }),
  },

  methods: {
    ...mapActions({ getAllMovies: "movies/getAllMovies" }),
  },

  async beforeRouteEnter(to, from, next) {
    // await this.$store.dispatch("getAllMovies");
    await store.dispatch("movies/getAllMovies");
    // await movies.dispatch("getAllMovies");

    next();
  },
};
</script>

<style scoped></style>
