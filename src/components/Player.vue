<template>
<div>
</div>
</template>

<script>
import {Howl, Howler} from 'howler'

export default {
  name: 'Player',
  data () {
    return {
      sound: new Howl({src: ['']})
    }
  },
  computed: {
    isPlaying () {
      return this.$store.getters.getIsPlaying
    },
    volume () {
      return this.$store.getters.getVolume
    },
    channelUrl () {
      return this.$store.getters.getCurrentChannelUrl
    }
  },
  methods: {
    initializePlayer () {
      this.sound = new Howl({
        src: [this.channelUrl],
        ext: ['mp3'],
        autoplay: false,
        html5: true
      })
      Howler.volume(this.volume)
    }
  },
  watch: {
    isPlaying: function () {
      if (this.isPlaying) {
        this.sound.play()
      } else {
        this.sound.pause()
      }
    },
    volume: function () {
      Howler.volume(this.volume)
    },
    channelUrl: function () {
      this.sound.pause()
      this.sound = new Howl({
        src: [this.channelUrl],
        ext: ['mp3'],
        autoplay: false,
        html5: true
      })
      this.$store.dispatch('togglePlaying', false)
    }
  },
  mounted () {
    this.initializePlayer()
  }
}
</script>

<style></style>
