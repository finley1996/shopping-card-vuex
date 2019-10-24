import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import card from './modules/card'
import shop from './modules/shop'

export default new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules:{
    card,
    shop
  }
})
