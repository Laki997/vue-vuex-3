<template>
  <div>
    <div class="row" :class="{ 'is-complete': selected }">
      <li>
        <div class="cell">{{ movie.title }}</div>
        <div class="cell">{{ movie.director }}</div>
        <div class="cell">{{ movie.genre }}</div>
        <div class="cell">{{ movie.release_date }}</div>
        <div class="cell">{{ movie.duration }}</div>
      </li>
    </div>
    <button class="btn btn-primary" @click="optionChanged($event)">
      Select
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: false,
    };
  },
  props: ["movie"],

  methods: {
    optionChanged: function() {
      this.$emit("optionChanged");
      this.selected = true;
    },
  },
};
</script>

<style scoped>
.is-complete {
  background: rgb(255, 0, 71);
  color: #fff;
}
</style>
