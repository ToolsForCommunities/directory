import axios from 'axios'

import api from '@/store/helpers/api'

export const state = () => ({
  isLoading: false,
  data: {},
  host: ''
})

export const actions = {
  get ({ commit }) {
    return axios.get(`${api.url}/config`)
      .then(response => response.data)
      .then((data) => {
        commit('SET_DATA', data)

        return data
      })
  },
  setHost ({ commit }, host) {
    commit('SET_HOST', host)
  }
}

export const mutations = {
  SET_DATA (state, data) {
    state.data = data
  },
  SET_HOST (state, host) {
    state.host = host
  }
}
