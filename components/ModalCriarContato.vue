<template lang="pug">
.modal-cria-contato
    button.button(type='button' @click='isModalCriaContatoActive = true')
        span.icon
            i.mdi.mdi-plus
        span Criar contato
    b-modal(v-model='isModalCriaContatoActive')
        p Sou um modal
</template>

<script>
export default {
  data() {
    return {
      isModalCriaContatoActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variable.scss';
.modal-cria-contato {
  text-align: center;
  display: flex;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: $light-red;
    width: 9rem;
    height: 2.5rem;
    background-color: $light-yellowish-green;
    border-radius: 20px;
    border: 0;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
      0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08),
      0 2px 4px 0.5px rgba(0, 0, 0, 0.16);

    .icon {
      margin-right: 0.3125rem;
    }
    i {
      font-size: 2rem;
    }

    &:hover,
    &:focus {
      background-color: $light-yellowish-green-hover;
    }
  }
}
</style>
