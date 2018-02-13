<template>
<div> {{data}}  </div>
</template>

<script>
import icy from 'icy'

export default {
  name: 'Metadata',
  data () {
    return {
      stationUrl: 'http://radio.vgmradio.com:8040/stream',
      data: 'TestMeta'
    }
  },
  methods: {
    loadMetadata: function () {
      icy.get(this.stationUrl, function (res) {
        console.log(res.headers)
        res.on('metadata', function (metadata) {
          var parsed = icy.parse(metadata)
          console.log(parsed.StreamTitle)
          this.data = parsed
        })
      })
    }
  },
  created: function () {
    this.loadMetadata()

    setInterval(function () {
      this.loadMetadata()
    }.bind(this), 300000)
  }
}
</script>

<style></style>
