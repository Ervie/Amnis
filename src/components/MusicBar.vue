<template>
  <div class="hello">
    <player id="mainPlayer"></player>
    <v-bottom-nav absolute :value="true">
      <v-list-tile-content grid-list-md>
         <v-list-tile-title>
           {{ currentChannel.name }}
         </v-list-tile-title>
         <v-list-tile-title>
           <metadata />
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
import axios from 'axios'

export default {
  name: 'MusicBar',
  data () {
    return {
      currentChannel: {
        name: '',
        url: '',
        id: -1,
        hasMetadata: false
      },
      volumeBar: this.$store.getters.getVolume * 100
    }
  },
  computed: {
    isPlaying () {
      return this.$store.getters.getIsPlaying
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
  },
  created: function () {
    axios.get('/api/Channel/' + this.$store.getters.getCurrentChannelId)
      .then((response) => {
        this.currentChannel.name = response.data.channelName
        this.currentChannel.id = response.data.id
        this.currentChannel.url = response.data.channelUrl
        this.currentChannel.hasMetadata = response.data.hasMetadata

        this.$store.commit('updateChannel', {'newId': this.currentChannel.id, 'newUrl': this.currentChannel.url})
      })
      .catch((error) => {
        console.log(error)
        this.currentChannel.name = ''
      })
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
