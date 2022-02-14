import axios from 'axios'

import api from '@/store/helpers/api'

export const state = () => ({
  isLoading: false,
  list: []
})

export const actions = {
  list ({ commit }) {
    return axios.get(`${api.url}/tag`)
      .then(response => response.data)
      .then((list) => {
        commit('SET_LIST', list)

        return list
      })
  }
}

export const mutations = {
  SET_LIST (state, list) {
    state.list = list
  }
}
