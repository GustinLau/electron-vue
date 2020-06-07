const state = {
  count: 1
}

const mutations = {
  ADD: (state) => {
    state.count++
  },
  REDUCE: (state) => {
    state.count--
  }
}

const actions = {
  add({ commit }) {
    commit('ADD')
  },
  reduce({ commit }) {
    commit('REDUCE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

