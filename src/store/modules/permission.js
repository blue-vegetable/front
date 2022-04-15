import { userRoutes, adminRoutes, constantRoutes } from '@/router'

const state = {
  route: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.route = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, role) {
    return new Promise(resolve => {
      let accessedRoutes
      if (role === 'admin') {
        accessedRoutes = adminRoutes
      } else {
        accessedRoutes = userRoutes
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
