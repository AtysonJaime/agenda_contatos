<template lang="pug">
  Nuxt
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss">
@import './assets/sass/variable.scss';
body,
html {
  overflow: auto !important;
}
.content-body {
  background-color: $pale-white;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  font-family: Roboto;
}
</style>
