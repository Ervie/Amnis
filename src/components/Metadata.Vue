<template>
<div v-text="songTitle">}  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Metadata',
  data () {
    return {
      songTitle: 'CurrentSongTitle'
    }
  },
  computed: {
    currentStationUrl () {
      return this.$store.getters.getCurrentStationUrl
    }
  },
  methods: {
    loadMetadata: function () {
      axios.get('/api/Metadata')
        .then((response) => {
          this.songTitle = response.data
        })
        .catch((error) => {
          console.log(error)
          this.songTitle = ''
        })
    }
  },
  timers: {
    loadMetadata: {
      time: 10000,
      repeat: true,
      autostart: true,
      immediate: true
    }
  }
}
</script>

<style></style>
