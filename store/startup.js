import axios from 'axios'

import api from '@/store/helpers/api'
import filterByTags from '@/store/helpers/filters/filterByTags'

export const state = () => ({
  isLoading: false,
  list: [],
  filters: []
})

function getSelected (state) {
  return filterByTags(state.list, state.filters.map(item => item && item.name)) || []
}

export const getters = {
  selected: getSelected,
  getById: state => id => state.list.find(item => item.id === id),
  search: state => (search) => {
    const safeSearch = search ? search.toUpperCase() : ''
    const list = getSelected(state)

    if (safeSearch === '' || !safeSearch) {
      return list
    }

    return list.filter((startup) => {
      let found = false
      // let expertise = startup.Tag && startup.Tag.map(tag => tag.name)

      // Search by text
      if ((startup.name && startup.name.toUpperCase().includes(safeSearch)) ||
        (startup.description && startup.description.toUpperCase().includes(safeSearch)) ||
        (startup.accelerator && startup.accelerator.toUpperCase().includes(safeSearch)) ||
        (startup.program && startup.program.toUpperCase().includes(safeSearch)) ||
        (startup.location && startup.location.toUpperCase().includes(safeSearch))
        // (startup.Group && inGroups(startup.Group, safeSearch))
        // || (startup.company && startup.company.toUpperCase().indexOf(safeSearch) > -1)
        // || (startup.expertise && this.inArray(startup.expertise, safeSearch))
        // (expertise && this.inTags(expertise, safeSearch))
      ) {
        found = true
      }

      return found
    })
  }
}

export const actions = {
  list ({ commit }) {
    return axios.get(`${api.url}/group`)
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
