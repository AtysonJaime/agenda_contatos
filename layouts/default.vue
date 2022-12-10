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
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.modal-content {
  display: flex;
  justify-content: center;
}
button {
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px $black-8,
    inset 0 0 0 0.5px $black-8, 0 2px 4px 0.5px $black-8-16;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: Roboto;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;
}
</style>
