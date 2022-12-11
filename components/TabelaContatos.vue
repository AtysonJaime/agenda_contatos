<template lang="pug">
    .overflow-auto
        .table-container
            table.table.is-hoverable.is-fullwidth
                thead
                    tr
                        th.coluna-latter
                        th
                            .content
                                p Contatos
                        th
                            .content
                                p E-mail
                        th
                            .content
                                p Telefone
                        th.coluna-latter
                tbody
                    template(v-for="item in contatos")
                        tr(:class='{"is-selected":item.active}' :key="item.id")
                            td
                                .content.content-latter
                                    AvatarColorido(:letra='item.primeiraLetra')
                            td
                                .content
                                    p {{item.nome}}
                            td
                                .content
                                    p {{item.email}}
                            td
                                .content
                                    p {{item.telefone}}
                            td
                                .content.content-actions
                                    ModalExcluirContato(:agenda='item')
</template>

<script>
import AvatarColorido from './AvatarColorido.vue'
import ModalExcluirContato from './ModalExcluirContato.vue'
export default {
  components: {
    AvatarColorido,
    ModalExcluirContato,
  },
  props: {
    contatos: {
      type: [Array, Object],
      require: false,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variable.scss';
.overflow-auto {
  overflow: auto;
}

.table-container {
  min-width: 31.25rem;
  border: 0.0625rem solid #e1e1e1;
  border-radius: 0.25rem;
}

.content {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 2.5rem;
  p {
    font-family: Roboto;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  &.content-latter {
    justify-content: center;
  }
}

.table {
  background-color: $white-two;

  tr {
    background-color: $white-two;
  }

  thead {
    th {
      padding: 0;
      p {
        color: $bluey-grey;
        font-size: 0.813rem;
      }
      &.coluna-latter {
        width: 3.125rem;
      }
    }
  }

  tbody {
    tr {
      &.is-selected,
      &:hover,
      &:focus {
        background-color: $very-light-pink !important;
        color: $dark;
      }
    }

    td {
      padding: 0;
      p {
        color: $dark;
        font-size: 0.8755rem;
      }
      .content-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.5rem;
      }
    }
  }

  th {
    border: 0.0625rem solid $white !important;
    border-width: 0 0 0.0625rem !important;
  }
  td {
    border: 0.0625rem solid $white !important;
    border-width: 0.0625rem 0 0 !important;
  }
}
</style>
