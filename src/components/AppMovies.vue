<template>
  <div>
    <div>
      Broj selektovanih filmova:
      <h1>{{ counter }}</h1>
      <div>
        <ul>
          <div>
            <movie-row
              v-for="(movie, index) in allMovies"
              :key="index"
              :movie="movie"
              v-on:optionChanged="selectedMovies"
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
  data() {
    return {
      counter: 0,
    };
  },
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
    selectedMovies() {
      event.target.disabled = true;
      this.counter++;
    },
  },

  async beforeRouteEnter(to, from, next) {
    await store.dispatch("movies/getAllMovies");

    next();
  },
};
</script>

<style scoped></style>
