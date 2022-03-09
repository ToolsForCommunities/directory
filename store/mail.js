import axios from 'axios'

import api from '@/store/helpers/api'

export const state = () => ({
  isLoading: false
})

export const actions = {
  send ({ commit }, emailData) {
    commit('loadStart')

    return axios.post(`${api.url}/email/connect`, emailData)
      .catch((e) => {
        console.error('Error connecting though email')
        console.error(e)

        // return e
        return 'Error connecting though email'
      })
      .finally(() => {
        commit('loadEnd')
      })
  }
}

export const mutations = {
  loadStart (state) {
    state.isLoading = true
  },
  loadEnd (state) {
    state.isLoading = false
  }
}
