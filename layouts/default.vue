<template lang="pug">
  div
    nav.navbar.header.has-shadow.is-light(role='navigation' aria-label='main navigation')
      .navbar-brand
        a.navbar-item(href='/')
          img(src='~/assets/ic-logo.svg' alt='Logo')
        .navbar-busca
          b-field
            b-input(placeholder='Buscar...' v-model='buscar' icon-right='magnify')
    section
      .container
        Nuxt(:searchValue='buscar')
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      buscar: '',
    }
  },
}
</script>

<style lang="scss" scoped></style>
