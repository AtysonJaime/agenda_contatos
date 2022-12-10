<template lang="pug">
div.content-body
  HeaderPage(@search='changeBuscaValue')
  section.section
    AgendaVazia(v-if='agenda.length === 0')
  //- <section class="section">
  //-   <div class="columns is-mobile">
  //-     <card title="Free" icon="github">
  //-       Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
  //-     </card>

  //-     <card title="Responsive" icon="cellphone-link">
  //-       <b class="has-text-grey"> Every </b> component is responsive
  //-     </card>

  //-     <card title="Modern" icon="alert-decagram">
  //-       Built with <a href="https://vuejs.org/"> Vue.js </a> and
  //-       <a href="http://bulma.io/"> Bulma </a>
  //-     </card>

  //-     <card title="Lightweight" icon="arrange-bring-to-front">
  //-       No other internal dependency
  //-     </card>
  //-   </div>
  //- </section>
</template>

<script>
import { mapState } from 'vuex'
import HeaderPage from '~/components/HeaderPage.vue'
import AgendaVazia from '~/components/AgendaVazia.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderPage,
    AgendaVazia,
  },
  data() {
    return {
      inputBusca: '',
    }
  },
  computed: {
    ...mapState('contatos', ['agenda']),
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
