import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStationUrl: 'currentStationUrl',
    isPlaying: true,
    volume: 0.5
  },
  getters: {
    getCurrentStationUrl: state => state.currentStationUrl,
    getIsPlaying: state => state.isPlaying,
    getVolume: state => state.volume
  },
  mutations: {
    togglePlaying (state, bool) {
      if (bool) state.isPlaying = bool
      else state.isPlaying = !state.isPlaying
    }
  },
  actions: {
    togglePlaying: (context, payload) => {
      context.commit('togglePlaying', payload)
    }
  }
})
