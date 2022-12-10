export const state = () => ({
  quantidadeItensAgenda: 1,
  agenda: [],
})

export const mutations = {
  ADD_CONTATO(state, payload) {
    state.agenda.push(payload)
    localStorage.setItem('agenda', JSON.stringify(state.agenda))
  },
  ADD_QUANTIDADE(state, payload) {
    state.quantidadeItensAgenda = payload
    localStorage.setItem('quantidadeItensAgenda', payload)
  },
  CHANGE_ACTIVE(state, payload) {
    const indexAtivo = state.agenda.findIndex(
      (contato) => contato.id === payload
    )
    state.agenda[indexAtivo].active = false
    localStorage.setItem('agenda', JSON.stringify(state.agenda))
  },
  SET_CONTATO(state, payload) {
    state.agenda = payload
  },
  SET_QUANTIDADE(state, payload) {
    state.quantidadeItensAgenda = payload
  },
}

export const actions = {
  addContato({ state, commit }, data) {
    const id = state.quantidadeItensAgenda
    const contato = {
      id,
      nome: data.nome,
      active: true,
      email: data.email,
      telefone: data.telefone,
      primeiraLetra: data.nome !== '' ? data.nome.charAt(0).toUpperCase() : '',
    }
    setTimeout(() => {
      const takeId = id
      commit('CHANGE_ACTIVE', takeId)
    }, 10000)
    commit('ADD_CONTATO', contato)
    commit('ADD_QUANTIDADE', id + 1)
  },
  setContatos({ commit }) {
    const agenda = JSON.parse(localStorage.getItem('agenda') || '[]')
    const quantidade = localStorage.getItem('quantidadeItensAgenda')
      ? localStorage.getItem('quantidadeItensAgenda')
      : 1
    commit('SET_CONTATO', agenda)
    commit('SET_QUANTIDADE', quantidade)
  },
}
