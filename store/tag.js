import axios from 'axios'

import api from '@/store/helpers/api'

export const state = () => ({
  isLoading: false,
  list: []
})

export const getters = {
  getByTarget: state => (target) => {
    const list = state.list

    if (!target || target.toLowerCase() === 'all') {
      return list
    }

    return list.filter(item => item.for.includes(target)) || []
  }
}

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
    state.list = list.filter(tag => tag.name).sort((a, b) => {
      return a.name.trim().localeCompare(b.name.trim())
    })
  }
}
