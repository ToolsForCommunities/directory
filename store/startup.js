import axios from 'axios'

import api from '@/store/helpers/api'
import filterByTags from '@/store/helpers/filters/filterByTags'

export const state = () => ({
  isLoading: false,
  list: []
})

export const getters = {
  selected (state) {
    return filterByTags(state.list, state.filters.map(item => item && item.name))
  },
  getById: state => id => state.list.find(item => item.id === id)
}

export const actions = {
  list ({ commit }) {
    return axios.get(`${api.url}/group`)
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
