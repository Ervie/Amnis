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
        autoplay: true,
        html5: true
      })
      this.sound.play()
      Howler.volume(this.volume)
    }
  },
  watch: {
    isPlaying: function () {
      if (this.isPlaying) {
        this.sound.mute(false)
      } else {
        this.sound.mute(true)
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
        autoplay: true,
        html5: true
      })
      this.sound.play()
    }
  },
  mounted () {
    this.initializePlayer()
  }
}
</script>

<style></style>
