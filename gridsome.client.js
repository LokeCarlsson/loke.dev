import Vuex from 'vuex'

export default function (Vue, options, {
  appOptions
}) {
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      isPrimary: true
    },
    mutations: {
      setPrimary(state) {
        state.isPrimary = true
      },
      resetPrimary(state) {
        state.isPrimary = false
      }
    },
    getters: {
      isPrimary: state => {
        return state.isPrimary
      }
    },
    actions: {
      primary(context, isPrimary) {
        isPrimary ? context.commit('setPrimary') : context.commit('resetPrimary')
      },
    },
  })
}
