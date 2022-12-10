<template lang="pug">
.agenda-vazia
    .content
        b-image(:src='imagem' alt='Agenda aberta')
        p.subtitle Nenhum contato foi criado ainda.
        ModalCriarContato

</template>

<script>
import ModalCriarContato from './ModalCriarContato.vue'
export default {
  components: {
    ModalCriarContato,
  },
  data() {
    return {
      imagem: require('~/assets/ic-book.svg'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variable.scss';
.agenda-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;

  .content {
    figure {
      width: 14.813rem;
    }
    .subtitle {
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: $dark;
    }
  }
}
</style>
