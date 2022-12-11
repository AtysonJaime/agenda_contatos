<template lang="pug">
.modal-cria-contato
    button.button.button-icon(type='button' @click='isModalExcluirContato = true' title='Excluir contato' aria-label='Excluir contato')
        span.icon
            i.mdi.mdi-delete
    b-modal(v-model='isModalExcluirContato')
        .card
          .card-header
            p.card-header.title Excluir contato
          .card-content
            p.card-body Deseja realmente excluir o contato de(a) {{agenda.nome}}
          .card-footer
            button.button.button-link(type='button' @click='closeModal()') Cancelar
            button.button.button-modal-action(type='button' @click='excluirContato()') Excluir
</template>

<script>
export default {
  props: {
    agenda: {
      type: [Array, Object],
      require: true,
      default: () => [],
    },
  },
  data() {
    return {
      isModalExcluirContato: false,
    }
  },

  methods: {
    closeModal() {
      this.isModalExcluirContato = false
    },

    async excluirContato() {
      await this.$store.dispatch('contatos/excluirContato', this.agenda.id)
      this.closeModal()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variable.scss';
.modal-cria-contato {
  text-align: center;
  display: flex;
  justify-content: center;

  .button-icon {
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;

    i {
      color: $bluey-grey;
    }

    &:hover,
    &:focus {
      box-shadow: 0;
      i {
        color: #52555e;
      }
    }
  }

  .card {
    border-radius: 1rem;
    width: 27rem;
    background-color: $white-two;

    .card-header {
      padding: 1rem;
      box-shadow: none;
      border-bottom: 0.0625rem solid #c0c3d2;
      p {
        padding: 0;
        border: 0;
        box-shadow: none;
        font-weight: normal;
        color: $dark;
        font-size: 1rem;
      }
    }

    .card-content {
      padding: 1.5rem;
      min-height: 5.781rem;
      p {
        padding: 0;
        border: 0;
        box-shadow: none;
        font-weight: normal;
        color: $dark;
        font-size: 0.875rem;
        display: flex;
      }
    }

    .card-footer {
      padding: 1rem;
      border-top: 0.0625rem solid #c0c3d2;
      box-shadow: none;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .button-link {
        border: 0;
        box-shadow: 0;
        padding: 0;
        background-color: $white-two;
        color: $light-red;
        margin-right: 1rem;

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }

      .button-modal-action {
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        margin: 0;
        height: 2rem;
        background-color: $light-red;
        color: $white-two;

        &:hover,
        &:focus {
          background-color: $light-red-hover;
        }
      }
    }
  }
}
</style>
