export const state = () => ({
  agenda: [],
})

export const mutations = {
  ADD_CONTATO(state, payload) {
    state.agenda.push(payload)
    localStorage.setItem('agenda', JSON.stringify(state.agenda))
  },

  SET_CONTATO(state, payload) {
    state.agenda = payload
  },

  EXCLUIR_CONTATO(state, payload) {
    state.agenda = payload
    localStorage.setItem('agenda', JSON.stringify(state.agenda))
  },

  CHANGE_ACTIVE(state, payload) {
    const indexAtivo = state.agenda.findIndex(
      (contato) => contato.id === payload
    )
    state.agenda[indexAtivo].active = false
    localStorage.setItem('agenda', JSON.stringify(state.agenda))
  },

  EDIT_CONTATO(state, payload) {
    const index = state.agenda.findIndex(
      (contato) => contato.id === payload.identificador
    )
    state.agenda[index].nome = payload.data.nome
    state.agenda[index].email = payload.data.email
    state.agenda[index].telefone = payload.data.telefone
    localStorage.setItem('agenda', JSON.stringify(state.agenda))
  },
}

export const actions = {
  addContato({ commit }, data) {
    const contato = {
      id: new Date().getTime(),
      nome: data.nome,
      active: true,
      email: data.email,
      telefone: data.telefone,
      primeiraLetra: data.nome !== '' ? data.nome.charAt(0).toUpperCase() : '',
    }
    setTimeout(() => {
      commit('CHANGE_ACTIVE', contato.id)
    }, 10000)
    commit('ADD_CONTATO', contato)
  },

  setContatos({ commit }) {
    const agenda = JSON.parse(localStorage.getItem('agenda') || '[]')
    commit('SET_CONTATO', agenda)
  },

  excluirContato({ state, commit }, identificador) {
    const filtrado = state.agenda.filter(
      (contato) => contato.id !== identificador
    )
    commit('EXCLUIR_CONTATO', filtrado)
  },

  editaContato({ commit }, payload) {
    commit('EDIT_CONTATO', payload)
  },
}
