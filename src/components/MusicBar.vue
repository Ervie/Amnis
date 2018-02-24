<template>
  <div class="hello">
    <v-bottom-nav absolute :value="true" tile>
      <v-list-tile-content grid-list-md>
         <v-list-tile-title>
           {{ currentChannel.name }}
         </v-list-tile-title>
         <v-list-tile-sub-title>
           <metadata :hasMetadata="currentChannel.hasMetadata" />
         </v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn flat v-on:click="setMinVolume">
          <v-icon>volume_mute</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-content>
          <v-slider step="1" v-model="volumeBar" dark />
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn flat v-on:click="setMaxVolume">
          <v-icon>volume_up</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn flat v-on:click="togglePlayPause">
              <v-icon dark v-if="isPlaying">pause</v-icon>
              <v-icon dark v-else>play_arrow</v-icon>
            </v-btn>
      </v-list-tile-action>
      </v-bottom-nav>
  </div>
</template>

<script>
import Metadata from '@/components/Metadata'
import axios from 'axios'
import {Howl, Howler} from 'howler'

export default {
  name: 'MusicBar',
  data () {
    return {
      currentChannel: {
        name: '',
        url: '',
        id: -1,
        hasMetadata: true
      },
      volumeBar: this.$store.getters.getVolume * 100,
      sound: new Howl({src: ['']})
    }
  },
  computed: {
    isPlaying () {
      return this.$store.getters.getIsPlaying
    }
  },
  components: {
    Metadata
  },
  methods: {
    togglePlayPause () {
      this.$store.dispatch('togglePlaying', !this.isPlaying)
      if (this.isPlaying) {
        this.sound.play()
      } else {
        this.sound.pause()
      }
    },
    setMinVolume () {
      this.volumeBar = 0
      this.$store.dispatch('changeVolume', 0)
    },
    setMaxVolume () {
      this.volumeBar = 100
      this.$store.dispatch('changeVolume', 1.0)
    },
    initializePlayer () {
      this.sound = new Howl({
        src: [this.currentChannel.url],
        ext: ['mp3'],
        html5: true
      })
      Howler.volume(this.volumeBar / 100)
    }
  },
  watch: {
    volumeBar: function (newVal, oldVal) {
      this.$store.commit('changeVolume', newVal / 100)
      Howler.volume(this.volumeBar / 100)
    }
  },
  created: function () {
    axios.get(process.env.API_URL + '/api/Channel/' + this.$store.getters.getCurrentChannelId)
      .then((response) => {
        this.currentChannel.name = response.data.channelName
        this.currentChannel.id = response.data.id
        this.currentChannel.url = response.data.channelUrl
        this.currentChannel.hasMetadata = response.data.hasMetadata

        this.$store.commit('updateChannel', {'newId': this.currentChannel.id, 'newUrl': this.currentChannel.url})
        this.initializePlayer()
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
