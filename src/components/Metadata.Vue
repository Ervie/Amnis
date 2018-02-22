<template>
<div v-if="hasMetadata" v-text="songTitle">}  </div>
</template>

<script>
import icy from 'icy'

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
      return this.$store.getters.getCurrentChannelId
    }
  },
  methods: {
    loadMetadata: function () {
      if (this.hasMetadata) {
        icy.get(this.$store.getters.getCurrentChannelUrl, function (res) {
          console.error(res.headers)
          res.on('metadata', function (metadata) {
            var parsed = icy.parse(metadata)
            console.error(parsed)
          })
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
