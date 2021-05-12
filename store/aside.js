export const state = () => ({
  current: null,
  id: -1
})

/**
 */
function parseAsideUri (viewName = '') {
  const options = viewName.split('/')
  return {
    name: options[0] || null,
    id: options[1] || -1
  }
}

export const actions = {
  set ({ commit }, viewName) {
    commit('set', parseAsideUri(viewName))
  },
  clear ({ commit }) {
    commit('set', parseAsideUri())
  }
}

export const mutations = {
  set (state, { name = null, id = -1 }) {
    state.current = name
    state.id = id
  }
}
