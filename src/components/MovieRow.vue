<template>
  <div>
    <div class="row">
      <li>
        <div class="cell">{{ movie.title }}</div>
        <div class="cell">{{ movie.director }}</div>
        <div class="cell">{{ movie.genre }}</div>
        <div class="cell">{{ movie.release_date }}</div>
        <div class="cell">{{ movie.duration }}</div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
};
</script>

<style scoped></style>
