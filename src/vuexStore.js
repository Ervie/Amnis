import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStationUrl: 'http://eurobeat.stream.laut.fm/eurobeat?ref=radiode&t302=2018-02-15_17-52-03&uuid=d61a2c85-f5f1-4bdc-9809-82cdd9e6c8cb',
    isPlaying: true,
    volume: 0.05
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
