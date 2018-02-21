<template>
  <div class="hello">
    <player id="mainPlayer" :stationUrl="currentStation"></player>
    <v-bottom-nav absolute :value="true">
      <v-list-tile-content grid-list-md>
         <v-list-tile-title>
           {{ currentStation }}
         </v-list-tile-title>
         <v-list-tile-title>
           <metadata :stationUrl="currentStation" />
         </v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-content>
          <v-slider prepend-icon="volume_up"  step="1" v-model="volumeBar" dark />
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn flat color="teal" v-on:click="togglePlayPause">
              <v-icon dark v-if="isPlaying">pause</v-icon>
              <v-icon dark v-else>play_arrow</v-icon>
            </v-btn>
      </v-list-tile-action>
      </v-bottom-nav>
  </div>
</template>

<script>
import Player from '@/components/Player'
import Metadata from '@/components/Metadata'

export default {
  name: 'MusicBar',
  data () {
    return {
      currentStation: 'http://radio.vgmradio.com:8040/stream',
      volumeBar: this.$store.getters.getVolume * 100,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    isPlaying () {
      return this.$store.getters.getIsPlaying
    },
    currentStationUrl () {
      return this.$store.getters.getCurrentStationUrl
    }
  },
  components: {
    Player,
    Metadata
  },
  methods: {
    togglePlayPause () {
      this.$store.dispatch('togglePlaying', !this.isPlaying)
    }
  },
  watch: {
    volumeBar: function (newVal, oldVal) {
      this.$store.commit('changeVolume', newVal / 100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
