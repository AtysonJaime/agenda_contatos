<template lang="pug">
div.content-body
  HeaderPage(@search='changeBuscaValue')
  section.section
    LoadingPage(v-if='isLoading')
    AgendaVazia(v-else-if='agenda.length === 0')
    TabelaContatos(v-else :contatos='buscaContatoTabela')
</template>

<script>
import { mapState } from 'vuex'
import HeaderPage from '~/components/HeaderPage.vue'
import AgendaVazia from '~/components/AgendaVazia.vue'
import LoadingPage from '~/components/LoadingPage.vue'
import TabelaContatos from '~/components/TabelaContatos.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderPage,
    AgendaVazia,
    LoadingPage,
    TabelaContatos,
  },
  data() {
    return {
      inputBusca: '',
      isLoading: true,
    }
  },
  computed: {
    ...mapState('contatos', ['agenda']),
    buscaContatoTabela() {
      return this.agenda.filter((contato) =>
        contato.nome.toLowerCase().includes(this.inputBusca.toLowerCase())
      )
    },
  },
  async mounted() {
    await this.$store.dispatch('contatos/setContatos').then(() => {
      this.isLoading = false
    })
  },
  methods: {
    changeBuscaValue(e) {
      this.inputBusca = e
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variable.scss';
.section {
  padding: 1rem;
}
</style>
