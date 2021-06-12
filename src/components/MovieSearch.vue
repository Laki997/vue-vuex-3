<template>
  <div>
    <div class="input-group">
      <div class="form-outline">
        <input type="text" v-model="search" class="form-control" />
        <label class="form-label" for="form1">Search</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search(value) {
      this.setSearchTerm(value);
    },
  },
  computed: {
    ...mapGetters({ allMovies: "movies/allMovies" }),
  },

  methods: {
    ...mapMutations({ setSearchTerm: "movies/setSearchTerm" }),
  },
};
</script>

<style scoped></style>
