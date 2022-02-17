import axios from 'axios'

import api from '@/store/helpers/api'

function inArray (array, data) {
  if (!data || typeof data !== 'string' || !Array.isArray(array)) {
    return false
  }

  let found = false
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i].toUpperCase().includes(data.toUpperCase())) {
      found = true
    }
  }

  return found
}

function filterByTags (list, tags, programs) {
  let filtered = list

  if (Array.isArray(tags) && tags.length !== 0) {
    // Filter by tags
    filtered = filtered.filter((person) => {
      let clearTags = []
      if (person.Tag) {
        clearTags = person.Tag.map(item => item.name)
      }

      for (let i = 0; i < tags.length; i += 1) {
        if (!clearTags || !inArray(clearTags, tags[i])) {
          return false
        }
      }
      return true
    })
  }

  if (Array.isArray(programs) && programs.length !== 0) {
    // Filter by programs
    filtered = filtered.filter((person) => {
      if (!person.program) {
        return false
      }

      for (let i = 0; i < programs.length; i += 1) {
        if (person.program.includes(programs[i])) {
          return true
        }
      }

      return false
    })
  }

  return filtered
}

export const state = () => ({
  isLoading: false,
  list: [],
  filters: []
})

export const getters = {
  selected (state) {
    return filterByTags(state.list, state.filters.map(item => item && item.name))
  },
  getById: state => id => state.list.find(item => item.id === id)
}

export const actions = {
  list ({ commit }) {
    return axios.get(`${api.url}/person`)
      .then(response => response.data)
      .then((list) => {
        commit('SET_LIST', list)

        return list
      })
  },
  setFilters ({ commit }, filters) {
    commit('SET_FILTERS', filters)
  }
}

export const mutations = {
  SET_LIST (state, list) {
    state.list = list
  },
  SET_FILTERS (state, filters) {
    state.filters = filters
  }
}
