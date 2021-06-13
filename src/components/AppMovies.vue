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
              :class="{ 'is-complete': selected }"
              v-on:optionChanged="selectedMovies"
              >Movies</movie-row
            >
            <hr />
          </div>
        </ul>
      </div>
      <button @click="selectAll" class="btn btn-primary">Select All</button>
      <button @click="deselectAll" class="btn btn-warning">Deselect All</button>
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
      selected: false,
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
    selectAll() {
      this.$emit("selectAll");
      this.selected = true;
    },

    deselectAll() {
      this.$emit("deselectAll");
      this.selected = false;
    },
  },

  async beforeRouteEnter(to, from, next) {
    await store.dispatch("movies/getAllMovies");

    next();
  },
};
</script>

<style scoped>
.is-complete {
  background: rgb(255, 0, 71);
  color: #fff;
  border: 10px solid;
}
</style>
