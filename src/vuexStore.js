import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStationUrl: 'http://stream.rpgamers.net:8000/rpgn?_=1428837997C',
    isPlaying: true,
    volume: 0.15
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
    },
    changeVolume (state, integer) {
      state.volume = integer
    }
  },
  actions: {
    togglePlaying: (context, payload) => {
      context.commit('togglePlaying', payload)
    },
    changeVolume: (context, payload) => {
      context.commit('changeVolume', payload)
    }
  }
})
