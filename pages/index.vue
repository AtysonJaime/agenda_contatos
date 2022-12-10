<template lang="pug">
div.content-body
  HeaderPage(@search='changeBuscaValue')
  section.section
    LoadingPage(v-if='isLoading')
    AgendaVazia(v-else-if='agenda.length === 0')
</template>

<script>
import { mapState } from 'vuex'
import HeaderPage from '~/components/HeaderPage.vue'
import AgendaVazia from '~/components/AgendaVazia.vue'
import LoadingPage from '~/components/LoadingPage.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderPage,
    AgendaVazia,
    LoadingPage,
  },
  data() {
    return {
      inputBusca: '',
      isLoading: true,
    }
  },
  computed: {
    ...mapState('contatos', ['agenda']),
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
}
</style>
