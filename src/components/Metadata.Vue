<template>
<div v-if="hasMetadata" v-text="songTitle">}  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Metadata',
  props: ['hasMetadata'],
  data () {
    return {
      songTitle: ''
    }
  },
  computed: {
    currentChannelId () {
      return this.$store.getters.getCurrentChannel.id
    }
  },
  methods: {
    loadMetadata: function () {
      if (this.hasMetadata) {
        axios.get(process.env.API_URL + '/api/Metadata/' + this.currentChannelId)
          .then((response) => {
            this.songTitle = response.data
          })
          .catch((error) => {
            console.log(error)
            this.songTitle = ''
          })
      }
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
