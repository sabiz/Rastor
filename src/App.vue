<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <section class="hero is-small">
    <RouterView />
  </section>
</template>

<style lang="scss">
@import 'bulma/bulma.sass';

</style>

<style>
@import 'animate.css';

html {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #212d40;
}

body,
.label,
.checkbox:hover {
  color: #c1cad6;
}
</style>
