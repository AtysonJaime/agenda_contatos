<template lang="pug">
  nav.navbar.header(role='navigation' aria-label='main navigation')
      .navbar-brand
        a.navbar-item(href='/')
          img(src='~/assets/ic-logo.svg' alt='Logo')
        ModalCriarContato(v-if='agenda.length > 0')
        .navbar-busca
          .field
            p.control.has-icons-right
              input.input.input-busca(type='text' placeholder='Buscar...' v-model='buscar' @keydown.enter='search')
              span.icon.is-right.is-clickable(@click='search')
                i.mdi.mdi-magnify.mdi-24px
</template>

<script>
import { mapState } from 'vuex'
import ModalCriarContato from './ModalCriarContato.vue'

export default {
  components: {
    ModalCriarContato,
  },
  data() {
    return {
      buscar: '',
    }
  },
  methods: {
    search() {
      this.$emit('search', this.buscar)
    },
  },
  computed: {
    ...mapState('contatos', ['agenda']),
  },
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variable.scss';
.header {
  min-height: 4rem;
  background-color: $pale-white;
  border: 0;

  .navbar-brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;

    .navbar-item {
      margin-right: 0.25rem;
      padding: 0.1rem;
      img {
        width: 9.25rem;
      }
    }

    .navbar-busca {
      margin-left: 0.625rem;
      max-width: 64.5rem;
      width: 100%;
      .input-busca {
        background-color: $pale-gray;

        &::placeholder {
          opacity: 1;
          color: $bluey-grey;
        }
      }
      .icon {
        color: $bluey-grey;
      }
    }
  }

  @media (max-width: '600px') {
    .navbar-brand {
      flex-wrap: wrap;

      .navbar-item img {
        width: 8.25rem;
      }

      .navbar-busca {
        margin-left: 0;
        margin-top: 0.625rem;
      }
    }
  }
}
</style>
