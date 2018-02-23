<template>
<div>
    <v-toolbar fixed dense>
        <v-spacer> </v-spacer>
        <v-toolbar-items>
            <v-btn flat @click="aboutDialog = true">
                About
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-dialog v-model="aboutDialog" max-width="400">
      <v-card>
        <v-card-title class="headline" style="font-weight: bold">Author: Bartłomiej Buchała (Ervie)</v-card-title>
        <v-card-media src="static/tanya.png" height="350px"></v-card-media>
        <v-card-text>
          <p>Simple radio streaming website. Currently in development for self-teaching purpose.</p>
          <p>Source code can be found <a href="https://github.com/Ervie/Amnis">here.</a></p>
        </v-card-text>
      </v-card>
    </v-dialog>
</div>
</template>

<script>

export default {
  name: 'NavBar',
  data () {
    return {
      aboutDialog: false
    }
  }
}
</script>

<style scoped></style>
