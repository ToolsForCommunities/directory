// import axios from 'axios'

import api from '@/store/helpers/api'

export const state = () => ({
  isLoading: false,
  data: {}
})

export const actions = {
  get ({ commit }) {
    return this.$axios.get(`${api.url}/config`)
      // .then(response => {
      //   console.log()
      //   response.data
      // })
      .then((data) => {
        commit('SET_DATA', data)

        return data
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

export const mutations = {
  SET_DATA (state, data) {
    state.data = data
  }
}
