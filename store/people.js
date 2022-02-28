import axios from 'axios'

import api from '@/store/helpers/api'
import filterByTags from '@/store/helpers/filters/filterByTags'
import filterByPrograms from '@/store/helpers/filters/filterByPrograms'

export const state = () => ({
  isLoading: false,
  list: [],
  filters: [],
  programs: []
})

/**
 *  Get selected people
 */
function getSelected (state) {
  const list = filterByTags(state.list, state.filters.map(item => item && item.name)) || []
  return filterByPrograms(list, state.programs) || []
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

    return list.filter((person) => {
      let found = false
      // let expertise = person.Tag && person.Tag.map(tag => tag.name)

      // Search by text
      if ((person.name && person.name.toUpperCase().includes(safeSearch)) ||
        (person.surname && person.surname.toUpperCase().includes(safeSearch)) ||
        (person.bio && person.bio.toUpperCase().includes(safeSearch)) ||
        (person.program && person.program.toUpperCase().includes(safeSearch)) ||
        (person.location && person.location.toUpperCase().includes(safeSearch))
        // (person.Group && inGroups(person.Group, safeSearch))
        // || (person.company && person.company.toUpperCase().indexOf(safeSearch) > -1)
        // || (person.expertise && this.inArray(person.expertise, safeSearch))
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
    return axios.get(`${api.url}/person`)
      .then(response => response.data)
      .then((list) => {
        commit('SET_LIST', list)

        return list
      })
  },
  setFilters ({ commit }, filters) {
    commit('SET_FILTERS', filters)
  },
  setPrograms ({ commit }, programs) {
    commit('SET_PROGRAMS', programs)
  },
  clearFilters ({ commit }) {
    commit('SET_FILTERS', [])
    commit('SET_PROGRAMS', [])
  }
}

export const mutations = {
  SET_LIST (state, list) {
    state.list = [
      ...list.filter(item => (item.pic && item.pic !== 'undefined')),
      ...list.filter(item => (!item.pic || item.pic === '' || item.pic === 'undefined'))
    ]
  },
  SET_FILTERS (state, filters) {
    state.filters = filters
  },
  SET_PROGRAMS (state, programs) {
    state.programs = programs
  }
}
