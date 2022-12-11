<template lang="pug">
.modal-cria-contato
    button.button.button-icon(type='button' @click='isModalEditaContato = true' title='Editar contato' aria-label='Editar contato')
        span.icon
            i.mdi.mdi-pencil
    b-modal(v-model='isModalEditaContato' @close='clearAll')
        .card
          .card-header
            p.card-header.title Editar contato
          .card-content
            FieldInput(label='Nome' inputType='text' :error='error.nome' @vmodel='changeValue' :valueInput='agenda.nome')
            FieldInput(label='E-mail' inputType='email' :error='error.email' @vmodel='changeValue' :valueInput='agenda.email')
            FieldInput.inputTelefone(label='Telefone' inputType='tel' :error='error.telefone' @vmodel='changeValue' :valueInput='agenda.telefone' :mascara="['(##) #####-####','(##) ####-####']")
          .card-footer
            button.button.button-link(type='button' @click='closeModal()') Cancelar
            button.button.button-modal-action(type='button' @click='editaContato()' :disabled='isDisabled') Salvar
</template>

<script>
import FieldInput from './FieldInput.vue'
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
      isModalEditaContato: false,
      contato: {
        nome: '',
        email: '',
        telefone: '',
      },
      error: {
        nome: '',
        email: '',
        telefone: '',
      },
    }
  },

  computed: {
    isDisabled() {
      return (
        this.contato.nome === '' &&
        this.contato.email === '' &&
        this.contato.telefone === ''
      )
    },
  },

  mounted() {
    this.contato.nome = this.agenda.nome
    this.contato.email = this.agenda.email
    this.contato.telefone = this.agenda.telefone
  },

  component: {
    FieldInput,
  },

  methods: {
    clearAll() {
      this.error.name = ''
      this.error.email = ''
      this.error.telefone = ''
    },

    closeModal() {
      this.clearAll()
      this.isModalEditaContato = false
    },

    changeValue(e) {
      this.contato[e[0].replace('-', '')] = e[1]
    },

    validaInputEmail() {
      const RegEx = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/
      if (!RegEx.test(this.contato.email)) {
        this.error.email = 'Adicione um email valido'
      } else {
        this.error.email = ''
      }
    },

    validaInputTelefone() {
      if (this.contato.telefone.length < 14) {
        this.error.telefone = 'Adicione um telefone valido'
      } else {
        this.error.telefone = ''
      }
    },

    async editaContato() {
      if (this.contato.email !== '') {
        this.validaInputEmail()
      }
      if (this.contato.telefone !== '') {
        this.validaInputTelefone()
      }
      if (
        this.error.nome === '' &&
        this.error.email === '' &&
        this.error.telefone === ''
      )
        await this.$store
          .dispatch('contatos/editaContato', {
            identificador: this.agenda.id,
            data: this.contato,
          })
          .then(() => {
            this.closeModal()
          })
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

      .inputTelefone {
        width: 55%;
      }

      .field {
        display: flex;
        flex-direction: column;
        text-align: start;
      }

      label {
        text-align: start !important;
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
