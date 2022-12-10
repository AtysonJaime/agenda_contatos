export const state = () => ({
  agenda: [],
})

export const mutations = {
  SET_CONTATO(state, payload) {
    state.agenda = payload
  },
}

export const action = {
  setContanto({ commit }, data) {},
}
